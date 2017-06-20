import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ClienteComponent } from "app/cliente/cliente.component";
import { ClienteRoutingModule } from "app/cliente/cliente.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClienteRoutingModule
  ],
  declarations: [
    ClienteComponent,
  ],
  exports:[
    ClienteComponent
  ]
})
export class ClienteModule { }
