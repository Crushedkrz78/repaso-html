import React, {Component} from 'react';

class MiComponente extends Component{
    
    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon Cocido'],
            calorias: 400
        }

        return(
            <div className="mi-componente">
                <h1>{'Receta: '+receta.nombre}</h1>
                <h2>{'Calorías: '+receta.calorias}</h2>
                {this.props.saludo &&
                    <React.Fragment>
                        <hr/>
                        <h1>Desde una PROP:</h1>
                        <h3>{this.props.saludo}</h3>
                        <hr/>
                    </React.Fragment>
                }
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i)=>{
                            return(
                                <li key={i}>{ingrediente}</li>
                            )
                        })
                    }
                </ol>
                <hr/>
            </div>
        );
    }
}

export default MiComponente;