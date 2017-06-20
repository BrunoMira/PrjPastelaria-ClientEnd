import { Component, OnInit } from '@angular/core';
import { Usuario } from "app/shared/classes/usuario";
import { Router } from "@angular/router";
import { UsuarioService } from "app/shared/services/usuario.service";

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  usuario: Usuario

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  cancelar(){
    this.usuario = new Usuario();
    this.router.navigate(['/atendente/home']);
  }

  salvarUsuario(){
    this.usuarioService.salvarUsuario(this.usuario)
    .subscribe(resp => {
      alert('Usuario ' + this.usuario.nome + " cadastrado com sucesso")
    })
  }

}
