import React, {Component} from 'react';
import logo from '../assets/img/logo.svg';

// Importar Componente
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component{
    // var HolaMundo = "";

    HolaMundo(nombre, edad){
        var presentacion = (
            <div>
                <h2>Hola, soy <strong>{nombre}</strong></h2>
                <h2>y tengo <strong>{edad}</strong> años</h2>
            </div>
        );

        return presentacion
    }

    render(){
        var nombre = "Cristian PM";
        return(
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Hola, bienvenido al curso de React de Víctor Robles.
                </p>
                {this.HolaMundo(nombre, 12)}
            </section>
        );
    }
}

export default SeccionPruebas;