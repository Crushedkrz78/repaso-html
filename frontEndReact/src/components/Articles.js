import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import ImageDefault from '../assets/img/default-image.png';

class Articles extends Component {

    state = {
        articles: [],
        status: null
    };

    url = Global.url;

    componentWillMount(){
        this.getArticles();
    }

    getArticles = () => {
        // console.log("getArticles");
        axios.get(this.url + "articles")
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
                            {/*<img src="https://via.placeholder.com/250x180" alt="placeholder"/>*/}
                            {article.image != null ? (
                                <img src={this.url + "get-image/" + article.image} alt={article.title}/>
                            ) : (
                                <img src={ImageDefault} alt="placeholder"/>
                            )

                            }
                            
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