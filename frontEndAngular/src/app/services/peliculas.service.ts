import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

  public peliculas: Pelicula[];

  constructor(){
    this.peliculas = [
      new Pelicula("Spiderman 4", 2015, 'https://www.liderempresarial.com/wp-content/uploads/2019/09/Spiderman.jpg'),
      new Pelicula("Los Vengadores Endgame", 2019,'https://as.com/tikitakas/imagenes/2019/04/26/portada/1556258369_131914_1556258703_noticia_normal.jpg'),
      new Pelicula("Batman vs Superman", 2015, 'https://lh3.googleusercontent.com/proxy/ollafJxAW7-CRNkn0iKeyoXXBABNJBDK0cuZ_1cRpaATgXWRswyyM4nloXioh8-XpjxMDcpC_54b899oJgpUx-PuoO4CBSbNj7s5VAg3X_BF0Of928WKomN6V-Hyef060lAO27WEj71HR3VOpyqgvdtON5N2bU-VlGLHXuJaQN7_9qqzP9b-castAM8mWyGy1nTsCDTf5UQF-stTD_PXehWu4uzmjEfE0aWgOWIf')
    ];
  }

  holaMundo(){
    return 'Hola Mundo desde un servicio de Angular';
  }

  getPeliculas(){
    return this.peliculas;
  }
}
