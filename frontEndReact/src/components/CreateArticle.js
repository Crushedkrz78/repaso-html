import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';

// Validación de formularios y alertas
class CreateArticle extends Component{

    titleRef = React.createRef();
    contentRef = React.createRef();

    url = Global.url;

    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    changeState = () => {
        this.setState({
            article:{
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });

        console.log(this.state);
    }

    saveArticle = (e) => {
        e.preventDefault();

        //Rellenar State con datos del formulario
        this.changeState();

        // Petición HTTP POST para guardar artículo
        axios.post(this.url+'save', this.state.article)
        .then(res => {
            if(res.data.article){
                this.setState({
                    article: res.data.article,
                    status: 'waiting'
                });
                // Subir la imagen
                if(this.state.selectedFile !== null){
                    // Obtener ID del artículo guardado
                    var articleId = this.state.article._id;
                    // Form data y añadir archivo
                    const formData = new FormData();

                    formData.append(
                        'file0',
                        this.state.selectedFile,
                        this.state.selectedFile.name
                    );
                    //Realizar petición AJAX
                    axios.post(this.url+'upload-image/'+articleId, formData)
                        .then(res => {
                            if(res.data.article){
                                this.setState({
                                    article: res.data.article,
                                    status: 'success'
                                });
                            }else{
                                this.setState({
                                    article: res.data.article,
                                    status: 'failed'
                                });
                            }
                        });
                }else{
                    this.setState({
                        status: 'success'
                    });
                }
            }else{
                this.setState({
                    status: 'failed'
                });
            }
        });
    }

    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }

    render(){
        if(this.state.status === 'success'){
            return <Redirect to="/blog"/>;
        }
        return(
            <div className="center">
                <section id="content">
                    <h1 className="subjeader">Crear Artículo</h1>
                    <form className="mid-form" onSubmit={this.saveArticle}>
                        <div className="form-group">
                            <label htmlFor="title">Título</label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" ref={this.contentRef} onChange={this.changeState}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" onChange={this.fileChange}/>
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