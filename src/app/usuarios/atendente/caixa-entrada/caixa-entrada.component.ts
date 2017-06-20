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
  pedidos: Pedido[] = [];;
  pesquisa: string;


  constructor(
    private pedidoService: PedidoService,
  ) { }

  ngOnInit() {
    this.getPedidosEtapa()
  }

  getPedidosEtapa(){
    this.pedidoService.getPedidosEtapa("ENTRADA")
      .subscribe(resp => this.pedidos = resp)
  }

  cancelar(modal){
    this.pedidoRejeitado = new Pedido();
    modal.hide()
    
  }

  aceitar(pedido: Pedido){
    this.pedidos = this.pedidos.filter(
      (element) => pedido._id != element._id
    );
    pedido.etapa = "ACEITO";
    pedido.horaPedidoAceito = new Date();
    this.pedidoService.atualizarPedido(pedido)
    .subscribe(resp => alert("Pedido " + pedido._id + " Será encaminhado a cozinha"));
  }

  rejeitar(modal, pedido){
    this.pedidoRejeitado = pedido;
    modal.show();
  }

  rejeitarPedido(modal){
    this.pedidoRejeitado.etapa = "REJEITADO";
    this.pedidoRejeitado.horaRejeita = new Date();
    this.pedidos = this.pedidos.filter(
      pedido => pedido._id != this.pedidoRejeitado._id
    )
    this.pedidoService.atualizarPedido(this.pedidoRejeitado)
    .subscribe(resp => alert(resp))
    modal.hide();
  }

  atualizar(){
    this.getPedidosEtapa()
  }

  possuiPedidosEntrada(){
    return this.pedidos.length > 0;
  }
  

}
