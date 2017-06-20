import { Component, OnInit } from '@angular/core';
import { ClienteService } from "app/shared/services/cliente.service";
import { UsuarioService } from "app/shared/services/usuario.service";

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit{

  listLi: HTMLCollection;
  nomeCliente: string = "";


  constructor(
    private clienteService: ClienteService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
  }

  clienteEstaLogado(){
    this.nomeCliente = this.clienteService.clienteEstaLogado() ? this.clienteService.nomeClienteLogado() : "";
    return this.clienteService.clienteEstaLogado()
  }

  usuarioLogado(){
    return this.usuarioService.usuarioEstaLogado() ? this.usuarioService.getPermissaoUsuario().toUpperCase() : "";
  }

  getNomeUsuario(){
    return this.usuarioService.usuario.nome
  }

  logout(){
    this.clienteService.logout();
  }

  logoutUsuario(){
    this.usuarioService.logout();
  }

}
