import { Component, OnInit } from '@angular/core';
import { ClienteService } from "app/shared/services/cliente.service";
import { Cliente } from "app/shared/classes/cliente";
import { Router } from "@angular/router";



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cliente = new Cliente();
  }

  buscarCliente(cpf){
    this.clienteService.buscarClienteCPF(cpf)
    .subscribe(resp => console.log(resp),
    (err) => alert(`Cliente ${cpf} não Existe`)
    )
  }

  

  salvarCliente() {
    this.clienteService.salvarCliente(this.cliente)
      .subscribe(resp => console.log(resp),
      (err) => alert(`Erro ao tentar salvar cliente ${this.cliente.nomeCliente}`)
      )
  }

  cancelar(){
    this.router.navigate(['/'])
  }

  buscarCPF(){
    this.clienteService.buscarClienteCPF(this.cliente.cpf)
    .subscribe(resp => alert('CPF: ' + resp.cpf+ " Já está cadastrado"))
  }

}
