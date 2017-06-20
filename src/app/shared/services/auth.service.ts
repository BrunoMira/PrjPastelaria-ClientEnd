import { Injectable } from '@angular/core';
import { Usuario } from "app/shared/classes/usuario";
import { Http } from "@angular/http";

@Injectable()
export class AuthService {


  usuario: Usuario;
  urlAPI: string = 'http://localhost:3000/api/';

  constructor(
    private http:Http
  ) { 
  }

  autenticarUsuario(usuario: Usuario) {
   this.usuario = new Usuario();
       return this.usuario;
  }

  autenticarUsuario2(usuario: Usuario){
     this.http.post(this.urlAPI + "usuario/autenticar", this.usuario)
        .map(resp => resp.json())
       .subscribe(usuario => this.usuario = usuario)
    
    return this.usuario;
  }


  obterUsuarioLogado(){
    return this.usuario;
  }

}
