import React, { Component } from 'react';
import axios from 'axios';

class Articles extends Component {

    state = {
        articles: [],
        status: null
    };

    componentWillMount(){
        this.getArticles();
    }

    getArticles = () => {
        // console.log("getArticles");
        axios.get("http://localhost:3900/api/articles")
            .then(res => {
                //console.log(res.data);
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });

                console.log(this.state);
            });
    }

    render(){
        if(this.state.articles.length >= 1){

            var listArticles = this.state.articles.map((article) => {
                return(
                    <article className="article-item" id="article-template">
                        <div className="image-wrap">
                            <img src="https://via.placeholder.com/250x180" alt="placeholder"/>
                        </div>
                        <h2>{article.title}</h2>
                        <span className="date">
                            {article.date}
                        </span>
                        <a href="#">Leer más</a>
                        
                        <div className="clearfix"></div>
                    </article>
                );
            });
            
            return(
                <div id="articles">
                    {listArticles}
                </div>
            );

        }else if(this.state.articles.length === 0 && this.state.status === 'success'){
            return(
                <div id="articles">
                    <h2 className="subheader">No hay artículos para mostrar</h2>
                </div>
            );
        }else{
            return(
                <div id="articles">
                    <h2 className="subheader">Cargando contenido...</h2>
                </div>
            );
        }
    }
}

export default Articles;