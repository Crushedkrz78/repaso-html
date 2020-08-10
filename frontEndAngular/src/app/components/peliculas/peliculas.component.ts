import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  public peliculas: Array<any>;

  constructor() {
    this.titulo = "Componente Peliculas";
    this.peliculas = [
      {year: 2019, title: "Spiderman 4", image:'https://www.liderempresarial.com/wp-content/uploads/2019/09/Spiderman.jpg'},
      {year: 2018, title: "Los Vengadores Endgame", image:'https://as.com/tikitakas/imagenes/2019/04/26/portada/1556258369_131914_1556258703_noticia_normal.jpg'},
      {year: 2015, title: "Batman vs Superman", image:'https://lh3.googleusercontent.com/proxy/ollafJxAW7-CRNkn0iKeyoXXBABNJBDK0cuZ_1cRpaATgXWRswyyM4nloXioh8-XpjxMDcpC_54b899oJgpUx-PuoO4CBSbNj7s5VAg3X_BF0Of928WKomN6V-Hyef060lAO27WEj71HR3VOpyqgvdtON5N2bU-VlGLHXuJaQN7_9qqzP9b-castAM8mWyGy1nTsCDTf5UQF-stTD_PXehWu4uzmjEfE0aWgOWIf'}
    ];
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
