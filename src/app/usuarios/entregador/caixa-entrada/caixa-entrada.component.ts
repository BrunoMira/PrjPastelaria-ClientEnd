import { Component, OnInit } from '@angular/core';
import { PedidoService } from "app/pedido/pedido.service";
import { Pedido } from "app/shared/classes/pedido";

@Component({
  selector: 'app-caixa-entrada',
  templateUrl: './caixa-entrada.component.html',
  styleUrls: ['./caixa-entrada.component.css']
})
export class CaixaEntradaComponent implements OnInit {
  pedidoRejeitado: Pedido = new Pedido();
  pedidosProntos: Pedido[] = [];
  pedidosEntrega: Pedido[] = [];
  pesquisa: string;

  constructor(
    private pedidoService: PedidoService,
  ) { }

  ngOnInit() {
    this.pedidoService.getPedidosEtapa("PRONTO")
      .subscribe(resp => {
        this.pedidosProntos = resp;
      })

    this.pedidoService.getPedidosEtapa("ENTREGA")
      .subscribe(resp => {
        this.pedidosEntrega = resp;
      })
  }

  cancelar(modal) {
    this.pedidoRejeitado = new Pedido();
    modal.hide()

  }

  //Quando um pedido for aceito, eu retido da lista de pedidos aceitos e adiciona na lista de produtos em preparo
  salvarPronto(pedido) {
    this.pedidosProntos = this.pedidosProntos.filter(
      (element) => {
        if (pedido._id == element._id) {
          this.pedidosEntrega.push(element);
        }
        else {
          return element;
        }
      }
    );
    pedido.etapa = "ENTREGA";
    pedido.horaCozinhaAceito = new Date();
    this.pedidoService.atualizarPedido(pedido)
     .subscribe(resp => alert("Pedido " + pedido._id.toUpperCase() + " irá ser praparado agora"));
  }

  //Quando um pedido estiver pronto eu apenas retiro da lista de pedido em preparo
  salvarEntrega(pedido: Pedido) {

    if(!pedido.estaPago){
      alert("O pedido precisa estar Pago para Finalizar");
      return;
    }
    this.pedidosEntrega = this.pedidosEntrega.filter(
      (element) => pedido._id != element._id
    );
    pedido.etapa = "FINALIZADO";
    pedido.horaCozinhaPronto = new Date();
    console.log(pedido)

    this.pedidoService.atualizarPedido(pedido)
    .subscribe(resp => alert("Pedido " + pedido._id.toUpperCase() + " está pronto e será encaminhado ao entregador"));
  }

  possuiPedidosProntos() {
    return this.pedidosProntos.length > 0;
  }

  possuiPedidosEntrega() {
    return this.pedidosEntrega.length > 0;
  }

  //realiza a conversão de string para boolean do select de pagamento
  onChange(id: string,event: string){
    let index = this.pedidosEntrega.findIndex( pedido => pedido._id == id);
    this.pedidosEntrega[index].estaPago = 'true'.includes(event) ? true : false;
  }

   rejeitar(modal, pedido) {
    this.pedidoRejeitado = pedido;
    modal.show();
  }

  rejeitarPedido(modal) {
    if (this.pedidoRejeitado.etapa.toUpperCase().includes('PRONTO')){
        this.pedidosProntos = this.pedidosProntos.filter(
      pedido => pedido._id != this.pedidoRejeitado._id
    )
    }else{
        this.pedidosEntrega = this.pedidosEntrega.filter(
        pedido => pedido._id != this.pedidoRejeitado._id
      )
    }

    this.pedidoRejeitado.etapa = "REJEITADO";
    this.pedidoRejeitado.horaRejeita = new Date();
    this.pedidoService.atualizarPedido(this.pedidoRejeitado)
      .subscribe(resp => alert(resp))
    modal.hide();
  }

 

}
