import { Component, OnInit } from '@angular/core';
import { Pedido } from "app/shared/classes/pedido";
import { Produto } from "app/shared/classes/produto";
import { Router } from "@angular/router";
import { PedidoService } from "app/pedido/pedido.service";
import { Cliente } from "app/shared/classes/cliente";
import { ClienteService } from "app/shared/services/cliente.service";

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent implements OnInit {

  pizzas: Produto[] = [];
  bebidas: Produto[] = [];
  pedido: Pedido
  cliente: Cliente

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private clienteService: ClienteService,
  ) {}

  ngOnInit() {
    this.cliente = new Cliente();
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

  carregarCliente(){
    if(this.cliente.cpf){
      this.clienteService.buscarClienteCPF(this.cliente.cpf)
      .subscribe(resp => this.cliente = resp,
      (err) => alert('Cliente não está cadastrado, preencha os campos abaixo!'));
    }
  }

  adicionarPedido(pizza) {

    if (this.pedido.pizza.length < 0 || !this.possueProduto(pizza))
      this.pedido.pizza.push(pizza);
    this.calcularTotalPedido()
  }

  removerPedido(pizza) {
    this.pedido.pizza = this.pedido.pizza.filter(
      item => item.titulo != pizza.titulo
    );
    this.calcularTotalPedido()
  }

  calcularTotalPedido() {
    this.pedido.precoTotal = 0;
    if (this.pedido.pizza.length > 0) {
      this.pedido.pizza.forEach(
        pizza => {
          this.pedido.precoTotal += pizza.preco * pizza.quantidade;
        }
      )
    }
  }

  cancelar() {
    this.pedido = new Pedido();
  }

  cancelarCliente(){
    this.cliente = new Cliente();
  }

  possueProduto(pizza) {
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
    if(!this.pedido.clienteCPF){
      alert("Nenhum cliente foi associado a esse pedido")
      return;
    }
    this.montarPedido();
    console.log(this.pedido)
    this.pedidoService.salvarPedido(this.pedido)
      .subscribe(resp => alert(resp.message))

  }

  montarPedido() {
    this.pedido.estaPago = this.pedido.estaPago || false;
    this.pedido.etapa = "ACEITO";
    this.pedido.horaPedidoAceito = new Date();
  }

  salvarCliente(){
    if(!this.cliente.cpf){
      alert("Preencha todos os campos, Por favor!");
      return;
    }
    if(this.cliente._id){
      this.pedido.clienteCPF = this.cliente.cpf;
      alert("Cliente Associado ao Pedido");
      return;
    }
    this.clienteService.salvarCliente(this.cliente)
    .subscribe(resp => {
      alert("Cliente "+ this.cliente.nomeCliente + " Salvo com sucesso");
      this.pedido.clienteCPF = this.cliente.cpf;
     })
  }

  onChange(event: string) {
    this.pedido.estaPago = 'true'.includes(event) ? true : false;
  }

}
