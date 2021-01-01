import React, {Component} from 'react';
import logo from '../assets/img/logo.svg';

// Importar Componente
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component{

    contador = 0;

    /*
    constructor(props){
        super(props);

        this.state = {
            contador: 0
        }
    }
    */

    state = {
       contador: 0
    }

    // var HolaMundo = "";
    sumar = (e) => {
        //this.contador += 1;
        //this.state.contador += 1;

        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        //this.contador -= 1;
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

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
                <h2 className="subheader">Funciones y JSX Básico</h2>
                {this.HolaMundo(nombre, 12)}

                <h2 className="subheader">Componentes</h2>

                <h2 className="subheader">Estado</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}/>
                    <input type="button" value="Restar" onClick={this.restar}/>
                </p>
            </section>
        );
    }
}

export default SeccionPruebas;