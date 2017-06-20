import { Component, OnInit } from '@angular/core';
import { Pedido } from "app/shared/classes/pedido";
import { Router } from "@angular/router";

import { PedidoService } from "app/pedido/pedido.service";
import { Produto } from "app/shared/classes/produto";
import { ClienteService } from "app/shared/services/cliente.service";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pizzas: Produto[] = [];
  bebidas: Produto[] = [];
  pedido: Pedido

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private router: Router
    ) {
    //this.pizzas = this.getPedidosEstatico();
    //this.bebidas = this.getBebidasEstatico();
   }

  ngOnInit() {
    this.pedido = new Pedido();
    let produtos: Produto[];
    this.pedidoService.getProdutos()
    .subscribe(resp => {
      produtos = resp;
      produtos.forEach(
        (produto) => {
          if (produto.tipo.includes("pizza"))
            this.pizzas.push(produto);
          else
            this.bebidas.push(produto);
        })
    })
  }

  adicionarPedido(pizza){
    this.confirmarMensagemLogin();
    if(this.pedido.pizza.length < 0 || !this.possueProduto(pizza))
    this.pedido.pizza.push(pizza);
    this.calcularTotalPedido()
  }

  removerPedido(pizza){
    this.pedido.pizza = this.pedido.pizza.filter(
      item => item.titulo != pizza.titulo
    );
    this.calcularTotalPedido()
  }

  calcularTotalPedido(){
    this.pedido.precoTotal = 0;
    if(this.pedido.pizza.length > 0){
      this.pedido.pizza.forEach(
        pizza => {
          this.pedido.precoTotal += pizza.preco * pizza.quantidade;
        }
      )
    }
  }

  cancelar(){
    this.pedido = new Pedido();
  }

  possueProduto(pizza){
    return this.pedido.pizza.some(
      (pedido) => pedido.titulo == pizza.titulo
    )
  }

  finalizarPedido() {

    if (this.pedido.pizza.length == 0) {
      alert("Pedido sem produto, tente novamente");
      return;
    }
    this.pedido.pizza.forEach(
      (produto) => {
        if (produto.quantidade == 0) {
          alert("Você precisa informar a quantidade da " + produto.titulo);
          return;
        }
      }
    )
    this.montarPedido();

    this.pedidoService.salvarPedido(this.pedido)
      .subscribe(resp => alert(resp.message))

  }

  confirmarMensagemLogin(){
    if (!this.clienteService.clienteEstaLogado()) {
      if (confirm("Você não está logado e não poderá finalizar o pedido, deseja fazer o login?")) {
        this.router.navigate(['login'])
      }
    }
  }

  montarPedido(){
    this.pedido.estaPago = false;
    this.pedido.etapa = "ENTRADA";
    this.pedido.horaPedidoFeito = new Date();
    this.pedido.clienteCPF = this.clienteService.cliente.cpf; 
  }

}
