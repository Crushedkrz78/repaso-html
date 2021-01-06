import React, { Component } from 'react';
import Slider from './Slider';

class Home extends Component{

    render(){

        return(
            <div id="home">
                <Slider 
                    title="Bienvenidos al Curso de ReactJS"
                    btn="Ver Más"
                />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Últimos artículos</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;