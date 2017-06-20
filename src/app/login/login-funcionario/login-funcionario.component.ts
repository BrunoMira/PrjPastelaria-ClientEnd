import { Component, OnInit } from '@angular/core';
import { Usuario } from "app/shared/classes/usuario";
import { UsuarioService } from "app/shared/services/usuario.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-funcionario',
  templateUrl: './login-funcionario.component.html',
  styleUrls: ['./login-funcionario.component.css']
})
export class LoginFuncionarioComponent implements OnInit {


  usuario: Usuario;

  login: string;
  senha: string;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit() {
  }

  logar() {
    if (this.login) {
      this.usuarioService.autenticarUsuario(this.login,this.senha)
        .subscribe(resp => {
          if (resp._id) {
            this.usuario = resp;
            alert('Bem Vindo ' + this.usuario.nome)
            this.usuarioService.login(this.usuario);
            this.router.navigate([`/${this.usuario.permissao.toLowerCase()}/home`]);
          }
          else {
            alert("Login ou senha Invalidos, " + resp.message)
            return;
          }
        },
        (err) => alert("Login invalido " + err))
    }

  }

  cancelar() {
    this.usuario = null;
    this.router.navigate(['/']);
  }



}
