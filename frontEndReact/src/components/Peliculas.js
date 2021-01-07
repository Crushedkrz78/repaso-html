import React, {Component} from 'react';
import MensajeEstatico from './MensajeEstatico';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Peliculas extends Component {
    state = {};

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        var random = Math.floor(Math.random() * 3);
        peliculas[random].titulo = "Batman Begins";

        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula, indice) => {
        console.log("Favorita marcada");
        console.log(pelicula);
        console.log(indice);
        this.setState({
            favorita: pelicula
        });
    }

    componentWillMount(){
        //alert("Se va a cargar el componente PELICULAS");
        this.setState({
            peliculas: [
                {titulo: 'Batman vs Superman', image: 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2016/06/14/batman-vs-superman-dawn-of-justice-movie.jpg'},
                {titulo: 'Gran Torino', image: 'https://assets.puzzlefactory.pl/puzzle/265/858/original.jpg'},
                {titulo: 'Looper', image:'https://www.filmanalizi.net/wp-content/uploads/2019/03/Looper-2012.jpg'}
            ],
            nombre: 'Cristian Perez',
            favorita: ''
        });
    }

    /* componentDidMount(){
        alert("Ya se ha montado el componente PELICULAS");
    } */

    /* componentWillUnmount(){
        alert("Se va a desmontar el componente PELICULAS");
    } */

    render(){
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        };

        //Condicionales en JS
        var favorita;
        if(this.state.favorita.titulo){
            favorita = (
                <p className="favorita" style={pStyle}>
                    <strong>La película favorita es: </strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>
            )
        }else{
            favorita = (
                <p>No hay película favorita</p>
            )
        }

        return(
            <React.Fragment>
                <Slider 
                        title="Películas"
                        size="slider-small"
                />
                <div className="center">
                    <div id="content" className="peliculas">
                        <h2 className="subheader">Listado de películas</h2>
                        <p>Selección de las películas favoritas de {this.state.nombre}:</p>
                        <div>
                            <button onClick={this.cambiarTitulo}>Cambiar Titulo de Batman</button>
                        </div>

                        {/*Condicionales en JSX */}
                        {/* {this.state.favorita.titulo ? (
                                <p className="favorita" style={pStyle}>
                                    <strong>La película favorita es: </strong>
                                    <span>{this.state.favorita.titulo}</span>
                                </p>
                            ) : (
                                <p>No hay película favorita</p>
                            )
                        } */}
                        {favorita}

                        {/*Crear componente Película */}
                        <div id="articles" className="peliculas">
                        {
                            this.state.peliculas.map((pelicula, i) => {
                                return(
                                    <Pelicula 
                                        key={i} 
                                        pelicula={pelicula}
                                        indice={i}
                                        marcarFavorita={this.favorita}
                                    />
                                )
                            })
                        }
                        </div>
                    </div>
                    <Sidebar
                        blog="false"
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Peliculas;