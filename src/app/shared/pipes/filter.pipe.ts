import { Pipe, PipeTransform } from '@angular/core';
import { Pedido } from "app/shared/classes/pedido";

@Pipe({
  name: 'pesquisa'

})
export class FilterPipe implements PipeTransform {

  transform(value: Pedido[], filtro?:string): any {
    if(filtro){
      return value.filter(
        valor => {
          return valor._id.toLocaleUpperCase().startsWith(filtro.toLocaleUpperCase())}
      )
    }
    return value;
  }

}
