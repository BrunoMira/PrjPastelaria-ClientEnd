import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Usuario } from "app/shared/classes/usuario";

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  url = 'http://localhost:3000/api/';

  constructor(
    private http: Http,
  ) { }

  autenticarUsuario(login,senha){
    return this.http.post(this.url+"usuario/autenticar",{'cpf': login , 'senha': senha})
    .map(resp => resp.json())
  }

  salvarUsuario(usuario){
    return this.http.post(this.url + "usuario", usuario)
    .map(resp => resp.json());
  }

  login(usuario){
    this.usuario = usuario;
  }

  logout(){
    alert('Até mais, '+this.usuario.nome)
    this.usuario = null;
  }

  usuarioEstaLogado(){
    return this.usuario != null;
  }

  getPermissaoUsuario(){
    return this.usuario.permissao;
  }

}
