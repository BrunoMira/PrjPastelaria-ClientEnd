import { Component, OnInit } from '@angular/core';
import { PedidoService } from "app/pedido/pedido.service";
import { Pedido } from "app/shared/classes/pedido";

@Component({
  selector: 'app-caixa-entrada',
  templateUrl: './caixa-entrada.component.html',
  styleUrls: ['./caixa-entrada.component.css']
})
export class CaixaEntradaComponent implements OnInit {
  pedidoRejeitado: Pedido;
  pedidosAceitos: Pedido[] = [];
  pedidosPreparo: Pedido[] = [];
  pesquisa: string;

  constructor(
    private pedidoService: PedidoService,
  ) { }

  ngOnInit() {
    this.pedidoRejeitado = new Pedido();
    this.pedidoService.getPedidosEtapa("ACEITO")
      .subscribe(resp => {
        this.pedidosAceitos = resp;
      })

    this.pedidoService.getPedidosEtapa("PREPARO")
      .subscribe(resp => { 
         this.pedidosPreparo = resp})
  }

  cancelar(modal) {
    this.pedidoRejeitado = new Pedido();
    modal.hide()

  }

  //Quando um pedido for aceito, eu retido da lista de pedidos aceitos e adiciona na lista de produtos em preparo
  salvarAceito(pedido) {
    this.pedidosAceitos = this.pedidosAceitos.filter(
      (element) => {
        if(pedido._id == element._id){
          this.pedidosPreparo.push(element);
        }
        else{
          return element;
        }
      }
    );
    pedido.etapa = "PREPARO";
    pedido.horaCozinhaAceito = new Date();
    this.pedidoService.atualizarPedido(pedido)
      .subscribe(resp => alert("Pedido " + pedido._id.toUpperCase() + " irá ser praparado agora"));
  }

  //Quando um pedido estiver pronto eu apenas retiro da lista de pedido em preparo
  aceitarPreparo(pedido: Pedido) {
    this.pedidosPreparo = this.pedidosPreparo.filter(
      (element) => pedido._id != element._id
    );
    pedido.etapa = "PRONTO";
    pedido.horaCozinhaPronto = new Date();

    this.pedidoService.atualizarPedido(pedido)
      .subscribe(resp => alert("Pedido " + pedido._id.toUpperCase() + " está pronto e será encaminhado ao entregador"));
  }

  possuiPedidosAceitos(){
    return  this.pedidosAceitos.length > 0;
  }

  possuiPedidosPreparados() {
    return  this.pedidosPreparo.length > 0;
  }

  rejeitar(modal, pedido) {
    this.pedidoRejeitado = pedido;
    modal.show();
  }

  rejeitarPedido(modal) {
    if (this.pedidoRejeitado.etapa.toUpperCase().includes('ACEITO')){
      this.pedidosAceitos = this.pedidosAceitos.filter(
      pedido => pedido._id != this.pedidoRejeitado._id
    )
    }else{
      this.pedidosPreparo = this.pedidosPreparo.filter(
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
