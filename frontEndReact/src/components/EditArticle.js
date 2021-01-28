import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import Global from '../Global';
import Sidebar from './Sidebar';
import ImageDefault from '../assets/img/default-image.png';

// 1. Recoger ID del artículo a editar de la URL
// 2. Crear Método para obtener objeto del Backend
// 3. Repoblar/Rellenar el formulario con los datos obtenidos
// 4. Actualizar el objeto mediante petición HTTP al backend

class EditArticle extends Component{

    titleRef = React.createRef();
    contentRef = React.createRef();

    url = Global.url;

    articleId = null;

    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    componentWillMount(){
        this.articleId = this.props.match.params.id;
        this.getArticle(this.articleId);

        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido.'
            }
        });
    }

    getArticle = (id) => {
        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article
                });
            });
    }

    changeState = () => {
        this.setState({
            article:{
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });
        this.validator.showMessages();
        this.forceUpdate();
    }

    saveArticle = (e) => {
        console.log("Guardando info del artículo");
        console.log(this.state);
        e.preventDefault();

        //Rellenar State con datos del formulario
        this.changeState();

        if(this.validator.allValid()){
            // Petición HTTP POST para guardar artículo
            console.log(this.url + 'article/' + this.articleId);
            axios.put(this.url + 'article/' + this.articleId, this.state.article)
                .then(res => {
                    console.log(res);
                    if(res.data.articleUpdated){
                        console.log("What happened");
                        this.setState({
                            article: res.data.articleUpdated,
                            status: 'waiting'
                        });
                        swal(
                            'Artículo actualizado',
                            'El artículo ha sido actualizado correctamente',
                            'success'
                        );
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
                                            article: res.data.articleUpdated,
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
                            status: 'fail'
                        });
                    }
                });
        }else{
            this.setState({
                status: 'failed'
            });
            this.validator.showMessages();
            this.forceUpdate();
        }

        console.log(this.state);
    }

    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }

    render(){
        console.log(this.state);
        if(this.state.status === 'success'){
            return <Redirect to="/blog"/>;
        }

        var article = this.state.article;
        return(
            <div className="center">
                <section id="content">
                    <h1 className="subjeader">Editar Artículo</h1>
                    {this.state.article.title &&
                        <form className="mid-form" onSubmit={this.saveArticle}>
                            <div className="form-group">
                                <label htmlFor="title">Título</label>
                                <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState}/>

                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" defaultValue={article.content} ref={this.contentRef} onChange={this.changeState}></textarea>
                                {this.validator.message('content', this.state.article.content, 'required')}
                            </div>
                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>
                                <input type="file" name="file0" onChange={this.fileChange}/>
                                <div className="image-wrap">
                                    {
                                        article.image !== null ? (
                                            <img src={this.url + 'get-image/' + article.image} alt={article.title} className="thumb"/>
                                        ) : (
                                            <img src={ImageDefault} alt={article.title} className="thumb"/>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="clearfix"></div>
                            <input type="submit" value="guardar" className="btn btn-success"/>
                        </form>
                    }

                    {!this.state.article.title &&
                        <h1 className="subheader">Cargando..</h1>
                    }
                </section>
                <Sidebar/>
            </div>
        );
    }
}

export default EditArticle;