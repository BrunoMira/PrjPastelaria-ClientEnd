import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ModalModule } from 'ngx-bootstrap/modal';


import { AtendenteModule } from "app/usuarios/atendente/atendente.module";
import { CozinheiroModule } from "app/usuarios/cozinheiro/cozinheiro.module";
import { EntregadorModule } from "app/usuarios/entregador/entregador.module";
import { UsuariosComponent } from "app/usuarios/usuarios.component";
import { UsuarioRoutingModule } from "app/usuarios/usuarios.routing";
import { HistoricoComponent } from "app/usuarios/historico/historico.component";
import { PipesModule } from "app/shared/pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AtendenteModule,
    CozinheiroModule,
    EntregadorModule,
    UsuarioRoutingModule,
    PipesModule,
    
  ],
  declarations: [
    UsuariosComponent,
    HistoricoComponent,
  ],
  providers:[

  ]
  
})
export class UsuariosModule { }
