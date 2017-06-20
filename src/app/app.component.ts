import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  constructor(
    private route:Router
  ){}

  //se for a rota login, desabilita o component footer-menu
  verificaRota(){
    
    let login = this.route.isActive('login', false);
    let atendentes = this.route.isActive('atendente', false);
    let cozinheiro = this.route.isActive('cozinheiro', false);
    let entregador = this.route.isActive('entregador', false);
    return  ! (login || atendentes || cozinheiro || entregador);
  }
}


