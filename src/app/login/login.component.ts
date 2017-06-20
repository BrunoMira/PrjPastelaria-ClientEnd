import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ClienteService } from "app/shared/services/cliente.service";
import { Cliente } from "app/shared/classes/cliente";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cliente: Cliente;

  login: string;
  senha: string;
  
  constructor(
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit() {
  }

    logar(){
      if(this.login){
        this.clienteService.buscarClienteCPF(this.login)
          .subscribe(resp => {
            this.cliente = resp
            if (this.cliente) {
              alert('Bem Vindo ' + this.cliente.nomeCliente)
              this.router.navigate(['/pedidos']);
              this.clienteService.login(this.cliente);
            }
            else{
            alert("Login ou senha Invalidos")
            return;
            }
          },
          (err) => alert("Login invalido " + err))
      }
      
  }

  cancelar(){
    this.cliente = null;
    this.router.navigate(['/']);
  }


}
