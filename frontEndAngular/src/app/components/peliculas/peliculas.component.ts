import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  // public peliculas: Array<any>;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService
  ) {
    this.titulo = "Películas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 8, 12);
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado";
  }

  ngOnInit(): void {
    console.log("Evento OnInit lanzado / Componente iniciado");
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck(): void {
    console.log("DoCheck lanzado");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy lanzado: Se va a eliminar este componente");
  }

  mostrarFavorita(event){
    console.log(event);
    this.favorita = event.pelicula;
  }

}
