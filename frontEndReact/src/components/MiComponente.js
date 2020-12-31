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