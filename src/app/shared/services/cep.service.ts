import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class CepService {
 //https://viacep.com.br/ws/01001000/json/
  private urlViaCep: string = 'https://viacep.com.br/ws/';

  constructor(
    private http: Http,
  ) { }

  consultaTeste(cep){
    return this.http.get(this.urlViaCep + cep+"/json/")
    .map(resp => resp.json())
  }
}
