import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from "app/usuarios/usuarios.component";
import { HistoricoComponent } from "app/usuarios/historico/historico.component";
import { CaixaEntradaComponent } from "app/usuarios/cozinheiro/caixa-entrada/caixa-entrada.component";
import { HomeComponent } from "app/usuarios/cozinheiro/home/home.component";

const routes: Routes = [
    {
        path: "cozinheiro", component: UsuariosComponent, children: [
            { path: "home", component: HomeComponent },
            { path: "caixa-entrada", component: CaixaEntradaComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CozinheiroRoutingModule { }
