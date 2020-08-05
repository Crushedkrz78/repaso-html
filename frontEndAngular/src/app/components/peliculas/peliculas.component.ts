import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  constructor() {
    this.titulo = "Componente Peliculas";
    console.log("Constructor lanzado");
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado";
  }

  ngOnInit(): void {
    console.log("Evento OnInit lanzado / Componente iniciado");
  }

  ngDoCheck(): void {
    console.log("DoCheck lanzado");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy lanzado: Se va a eliminar este componente");
  }

}
