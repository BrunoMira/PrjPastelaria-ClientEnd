import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendenteRoutingModule } from "app/usuarios/atendente/atendente.routing";
import { AtendenteComponent } from "app/usuarios/atendente/atendente.component";
import { HomeComponent } from "app/usuarios/atendente/home/home.component";
import { NovoPedidoComponent } from "app/usuarios/atendente/novo-pedido/novo-pedido.component";
import { NovoUsuarioComponent } from "app/usuarios/atendente/novo-usuario/novo-usuario.component";
import { CaixaEntradaComponent } from "app/usuarios/atendente/caixa-entrada/caixa-entrada.component";
import { FormsModule } from "@angular/forms";
import { UsuarioService } from "app/shared/services/usuario.service";
import { PipesModule } from "app/shared/pipes/pipes.module";

import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  imports: [
    CommonModule,
    AtendenteRoutingModule,
    FormsModule,
    PipesModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AtendenteComponent,
    HomeComponent,
    NovoPedidoComponent,
    NovoUsuarioComponent,
    CaixaEntradaComponent,
  ],
  providers:[
    UsuarioService,
  ]
})
export class AtendenteModule { }
