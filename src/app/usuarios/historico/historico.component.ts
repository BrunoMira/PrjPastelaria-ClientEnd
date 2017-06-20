import { Component, OnInit } from '@angular/core';
import { PedidoService } from "app/pedido/pedido.service";
import { Pedido } from "app/shared/classes/pedido";
import { Exibicao } from "app/shared/classes/exibicao";

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  exibicoes: Exibicao[] = [];
  pesquisa: string;
  


  constructor(
    private pedidoService: PedidoService,
  ) { }

  ngOnInit() {
    this.pedidoService.getPedidos()
      .subscribe(resp => {this.montarPedidos(resp) ; console.log(this.exibicoes)})
  }

  montarPedidos(exibicoes : Pedido[]){
    for(let pedido of exibicoes){
      pedido.etapa.toUpperCase().includes('ENTRADA') ? this.adicionarExibicao(pedido,'Novos Pedidos') : null;

      pedido.etapa.toUpperCase().includes('ACEITO') ? this.adicionarExibicao(pedido, 'Pedidos Aceitos') : null;

      pedido.etapa.toUpperCase().includes('PREPARO') ? this.adicionarExibicao(pedido, 'Pedidos em Preparo') : null;

      pedido.etapa.toUpperCase().includes('PRONTO') ? this.adicionarExibicao(pedido, 'Pedidos Prontos') : null;

      pedido.etapa.toUpperCase().includes('ENTREGA') ? this.adicionarExibicao(pedido, 'Pedidos a Caminho') : null;

      pedido.etapa.toUpperCase().includes('FINALIZADO') ? this.adicionarExibicao(pedido, 'Pedidos Finalizados') : null;

      pedido.etapa.toUpperCase().includes('REJEITADO') ? this.adicionarExibicao(pedido, 'Pedidos rejeitados') : null;
    }
  }

  adicionarExibicao(pedido: Pedido, etapa: string){
    
    let exibicao: Exibicao = this.exibicoes.find(exibicao => exibicao.etapa.includes(etapa));
    
    if(exibicao){
      exibicao.pedidos.push(pedido);
      return;
    }
    exibicao = new Exibicao(etapa);
    exibicao.pedidos.push(pedido);
    this.exibicoes.push(exibicao);
  }

  ultimoHorario(pedido) {
    if (pedido.horaRejeita) {
      return pedido.horaRejeita
    }
   if (pedido.horaEntregaPronto) {
     return pedido.horaEntregaPronto
    }
   if (pedido.horaEntregaCaminho) {
     return pedido.horaEntregaCaminho
    }
   if (pedido.horaCozinhaPronto) {
     return pedido.horaCozinhaPronto
   }
   if (pedido.horaCozinhaAceito) {
     return pedido.horaCozinhaAceito
   }
   if (pedido.horaPedidoAceito) {
     return pedido.horaPedidoAceito
   }
   if (pedido.horaPedidoFeito) {
     return pedido.horaPedidoFeito
   }
   if (pedido.horaPedido) {
     return pedido.horaPedido
   }

  }

}
