import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';

// Validación de formularios y alertas
class CreateArticle extends Component{
    render(){
        return(
            <div className="center">
                <section id="content">
                    <h1 className="subjeader">Crear Artículo</h1>
                </section>
                <Sidebar/>
            </div>
        );
    }
}

export default CreateArticle;