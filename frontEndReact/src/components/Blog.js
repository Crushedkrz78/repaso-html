import React, { Component } from 'react';
import axios from 'axios';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Blog extends Component{

    state = {
        articles: {},
        status: 'failed'
    }

    render(){

        /* // Petición AJAX de prueba
        axios.get("http://localhost:3900/api/articles")
            .then(res => {
                console.log(res.data);
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            }); */

        return(
            <div id="blog">
                <Slider 
                    title="Blog"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Últimos artículos</h1>
                        {/*Listado de artículos de la API */}
                        <Articles/>
                        
                    </div>

                    <Sidebar
                        blog="true"
                    />
                </div>
            </div>
        );
    }
}

export default Blog;