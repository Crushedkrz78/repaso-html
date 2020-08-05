import {Component} from '@angular/core';

@Component({
  selector: 'mi-componente',
  template: `
    <h1>{{titulo}}</h1>
    <h2>{{year}}</h2>
    <p>{{comentario}}</p>
  `
})
export class MiComponente{
  public titulo: string;
  public comentario: string;
  public year: number;

  constructor(){
    this.titulo = "Hola Mundo desde mi componente";
    this.comentario = "Este es mi primer componente";
    this.year = 2020;
    //console.log("Componente mi-componente");
  }
}
