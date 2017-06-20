import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { PedidoComponent } from "app/pedido/pedido.component";
import { PedidoRoutingModule } from "app/pedido/pedido.routing.module";
import { PedidoService } from "app/pedido/pedido.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PedidoRoutingModule,
    FormsModule,
  ],
  declarations: [
    PedidoComponent,
  ],
  providers:[
    PedidoService
  ]
})
export class PedidoModule { }
