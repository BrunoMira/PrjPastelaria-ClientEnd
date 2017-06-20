import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from "app/usuarios/usuarios.component";
import { CaixaEntradaComponent } from "app/usuarios/entregador/caixa-entrada/caixa-entrada.component";
import { HomeComponent } from "app/usuarios/entregador/home/home.component";

const routes: Routes = [
    {
        path: "entregador", component: UsuariosComponent, children: [
            { path: "home", component: HomeComponent },
            { path: "caixa-entrada", component: CaixaEntradaComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntregadorRoutingModule { }
