import React, {Component} from 'react';
import MensajeEstatico from './MensajeEstatico';

class Peliculas extends Component {
    state = {
        peliculas: [
            {titulo: 'Batman vs Superman', image: 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2016/06/14/batman-vs-superman-dawn-of-justice-movie.jpg'},
            {titulo: 'Gran Torino', image: 'https://assets.puzzlefactory.pl/puzzle/265/858/original.jpg'},
            {titulo: 'Looper', image:'https://www.filmanalizi.net/wp-content/uploads/2019/03/Looper-2012.jpg'}
        ],
        nombre: 'Cristian Perez'
    };

    render(){
        return(
            <div id="content" className="peliculas">
                <h2 className="subheader">Películas</h2>
                <p>Selección de las películas favoritas de {this.state.nombre}:</p>

                {/*Crear componente Película */}
                <div id="articles" className="peliculas">
                {
                    this.state.peliculas.map((pelicula, i) => {
                        return(
                            <article className="article-item" id="article-template">
                                <div className="image-wrap">
                                    <img src={pelicula.image} alt={pelicula.titulo}/>
                                </div>
                                <h2>{pelicula.titulo}</h2>
                                <span className="date">
                                    Hace 5 minutos
                                </span>
                                <a href="#">Leer más</a>
                                
                                <div className="clearfix"></div>
                            </article>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

export default Peliculas;