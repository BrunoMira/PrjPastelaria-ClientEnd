import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from "app/menu/menu.component";
import { LoginComponent } from "app/login/login.component";
import { PedidoComponent } from "app/pedido/pedido.component";
import { LoginFuncionarioComponent } from "app/login/login-funcionario/login-funcionario.component";
import { SobreComponent } from "app/menu/sobre/sobre.component";

const routes: Routes = [
  { path: 'login',component: LoginComponent },
  { path: "pedidos", loadChildren: 'app/pedido/pedido.module#PedidoModule' },
  { path: "clientes", loadChildren: 'app/cliente/cliente.module#ClienteModule' },
  { path:'loginFuncionario', component: LoginFuncionarioComponent},
  { path:"sobre" , component: SobreComponent },
  { path: "home", component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
