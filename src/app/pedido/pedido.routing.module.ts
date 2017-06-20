import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PedidoComponent } from "app/pedido/pedido.component";

const routes: Routes = [
    { path: "", component: PedidoComponent, children:[
    ] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PedidoRoutingModule { }
