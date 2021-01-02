import React, {Component} from 'react';
import MensajeEstatico from './MensajeEstatico';
import Pelicula from './Pelicula';

class Peliculas extends Component {
    state = {
        peliculas: [
            {titulo: 'Batman vs Superman', image: 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2016/06/14/batman-vs-superman-dawn-of-justice-movie.jpg'},
            {titulo: 'Gran Torino', image: 'https://assets.puzzlefactory.pl/puzzle/265/858/original.jpg'},
            {titulo: 'Looper', image:'https://www.filmanalizi.net/wp-content/uploads/2019/03/Looper-2012.jpg'}
        ],
        nombre: 'Cristian Perez'
    };

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        var random = Math.floor(Math.random() * 3);
        peliculas[random].titulo = "Batman Begins";

        this.setState({
            peliculas: peliculas
        })
    }

    render(){
        return(
            <div id="content" className="peliculas">
                <h2 className="subheader">Películas</h2>
                <p>Selección de las películas favoritas de {this.state.nombre}:</p>
                <div>
                    <button onClick={this.cambiarTitulo}>Cambiar Titulo de Batman</button>
                </div>

                {/*Crear componente Película */}
                <div id="articles" className="peliculas">
                {
                    this.state.peliculas.map((pelicula, i) => {
                        return(
                            <Pelicula 
                                key={i} 
                                pelicula={pelicula}
                            />
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

export default Peliculas;