import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { CozinheiroRoutingModule } from "app/usuarios/cozinheiro/cozinheiro.routing";
import { HomeComponent } from "app/usuarios/cozinheiro/home/home.component";
import { CaixaEntradaComponent } from "app/usuarios/cozinheiro/caixa-entrada/caixa-entrada.component";
import { PipesModule } from "app/shared/pipes/pipes.module";

import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CozinheiroRoutingModule,
    PipesModule,
    ModalModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    CaixaEntradaComponent,
  ]
})
export class CozinheiroModule { }
