import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from "app/usuarios/usuarios.component";
import { HistoricoComponent } from "app/usuarios/historico/historico.component";

const routes: Routes = [
    { path: "usuario", component: UsuariosComponent, children: [
        {path: "atendente", loadChildren:'app/usuarios/atendente/atendente.module#AtendenteModule'},
        {path: "cozinheiro", loadChildren: 'app/usuarios/cozinheiro/cozinheiro.module#CozinheiroModule' },
        {path: "entregador", loadChildren: 'app/usuarios/entregador/entregador.module#EntregadorModule' }
    ] },
    {path: 'historico', component: HistoricoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }
