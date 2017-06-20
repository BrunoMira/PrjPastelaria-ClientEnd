import { Component, OnInit } from '@angular/core';

import { Usuario } from "app/shared/classes/usuario";
import { AuthService } from "app/shared/services/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario: Usuario;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usuario = this.authService.obterUsuarioLogado();
  }

}
