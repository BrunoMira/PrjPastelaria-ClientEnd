import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from "app/usuarios/usuarios.component";
import { HistoricoComponent } from "app/usuarios/historico/historico.component";
import { HomeComponent } from "app/usuarios/atendente/home/home.component";
import { CaixaEntradaComponent } from "app/usuarios/atendente/caixa-entrada/caixa-entrada.component";
import { NovoUsuarioComponent } from "app/usuarios/atendente/novo-usuario/novo-usuario.component";
import { NovoPedidoComponent } from "app/usuarios/atendente/novo-pedido/novo-pedido.component";

const routes: Routes = [
    {
        path: "atendente", component: UsuariosComponent, children: [
            { path: "home", component: HomeComponent },
            { path: "novo-pedido", component: NovoPedidoComponent },
            { path: "novo-usuario", component: NovoUsuarioComponent },
            { path: "caixa-entrada", component: CaixaEntradaComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AtendenteRoutingModule { }
