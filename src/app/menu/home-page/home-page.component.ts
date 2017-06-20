import { Component, OnInit } from '@angular/core';

import { CepService } from "app/shared/services/cep.service";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private service: CepService
  ) { }

  ngOnInit() {
  }

  consulta(cep){
    this.service.consultaTeste(cep)
    .subscribe(cep => console.log(cep))
  }

}
