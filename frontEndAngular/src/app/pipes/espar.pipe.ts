import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espar'
})

export class EsParPipe implements PipeTransform{
  transform(value: any){
    var espar = "No es número Par";
    if(value%2 == 0){
      espar = "Es un número Par";
    }
    return "El año es: "+value+" y "+espar;
  }
}
