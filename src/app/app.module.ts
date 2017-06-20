import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { PedidoModule } from "app/pedido/pedido.module";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

import { NavbarMenuComponent } from './menu/navbar-menu/navbar-menu.component';
import { HomePageComponent } from './menu/home-page/home-page.component';
import { FooterMenuComponent } from './menu/footer-menu/footer-menu.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AuthService } from "app/shared/services/auth.service";
import { ClienteService } from "app/shared/services/cliente.service";
import { ClienteModule } from "app/cliente/cliente.module";
import { CepService } from "app/shared/services/cep.service";
import { UsuariosModule } from "app/usuarios/usuarios.module";
import { LoginFuncionarioComponent } from './login/login-funcionario/login-funcionario.component';
import { SobreComponent } from './menu/sobre/sobre.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    NavbarMenuComponent,
    HomePageComponent,
    FooterMenuComponent,
    LoginFuncionarioComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PedidoModule,
    ClienteModule,
    UsuariosModule,
    
    BsDropdownModule.forRoot()
  ],
  providers: [AuthService , ClienteService, CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
