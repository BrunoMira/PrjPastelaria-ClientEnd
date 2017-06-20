import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Pedido } from "app/shared/classes/pedido";
import 'rxjs/Rx';
import { Produto } from "app/shared/classes/produto";

@Injectable()
export class PedidoService {

  urlAPI: string = "http://localhost:3000/api/";

  constructor(
    private http: Http
  ) { }

  getUrl(url){
    return this.urlAPI + url;
  }

  salvarPedido(pedido: Pedido){
    return this.http.post(this.getUrl("pedido"), pedido)
    .map(resp => resp.json());
  }

  getProdutos(){
    return this.http.get(this.urlAPI+"produtos")
    .map(resp => resp.json());
  }

  getPedidos(){
    return this.http.get(this.urlAPI + "pedidos")
    .map(response => response.json());
  }

  getPedidoId(id: string) {
    return this.http.get(this.urlAPI + "pedido/" + id)
      .map(response => response.json());
  }

  atualizarPedido(pedido){
    return this.http.put(this.urlAPI+ "pedido/" + pedido._id, pedido)
    .map(resp => resp.json());
  }

  getPedidosEtapa(etapa){
    return this.http.get(this.urlAPI + "pedido/etapa/" + etapa)
    .map(resp => resp.json())
  }

}
