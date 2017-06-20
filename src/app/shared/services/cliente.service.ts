import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Cliente } from "app/shared/classes/cliente";
import { Router } from "@angular/router";

@Injectable()
export class ClienteService {

  cliente: Cliente = null;

  url: string = "http://localhost:3000/api/";

  constructor(
    private http: Http,
    private router: Router
  ) { }

  nomeClienteLogado(){
    if(this.clienteEstaLogado()){
      return this.cliente.nomeCliente
    }
    return "";
  }

  buscarClienteCPF(cpf){
  return this.http.get(this.url +"cliente/"+ cpf)
    .map(resp => resp.json());
  }

  salvarCliente(cliente){
    return this.http.post(this.url+"cliente",cliente)
    .map(resp => resp.json());
  }
    

  logout(){
    alert("Volte sempre, "+ this.cliente.nomeCliente )
      this.cliente = null;
  }

  clienteEstaLogado(){
    return this.cliente != null;
  }

  login(cliente){
    this.cliente = cliente;
  }

}
