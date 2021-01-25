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
                    <form className="mid-form">
                        <div className="form-group">
                            <label htmlFor="title">Título</label>
                            <input type="text" name="title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0"/>
                        </div>

                        <input type="submit" value="guardar" className="btn btn-succes"/>
                    </form>
                </section>
                <Sidebar/>
            </div>
        );
    }
}

export default CreateArticle;