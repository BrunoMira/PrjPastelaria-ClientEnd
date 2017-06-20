import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { EntregadorRoutingModule } from "app/usuarios/entregador/entregador.routing";
import { HomeComponent } from "app/usuarios/entregador/home/home.component";
import { CaixaEntradaComponent } from "app/usuarios/entregador/caixa-entrada/caixa-entrada.component";
import { PipesModule } from "app/shared/pipes/pipes.module";

import { ModalModule } from "ngx-bootstrap/modal";



@NgModule({
  imports: [
    CommonModule,
    EntregadorRoutingModule,
    PipesModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    CaixaEntradaComponent,
    HomeComponent,
  ]
})
export class EntregadorModule { }
