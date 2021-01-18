import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from '../Global';
import ImageDefault from '../assets/img/default-image.png';

class Articles extends Component {

    state = {
        articles: [],
        status: null
    };

    url = Global.url;

    componentWillMount(){
        var home = this.props.home;
        var search = this.props.search;

        if(home === 'true'){
            this.getLastArticles();
        }else if(search && search !== null && search !== undefined){
            this.getArticlesBySearch(search);
        }else{
            this.getArticles();
        }
        
    }

    getArticlesBySearch = (searched) => {
        console.log(this.url + "search/" + searched);
        axios.get(this.url + "search/" + searched)
            .then(res => {
                this.setState({
                    articles: res.data.articlesFound,
                    status: 'success'
                });
            })
            .catch(err => {
                console.log(err.response);
                this.setState({
                    articles: [],
                    status: 'success'
                });
            });
    }

    getLastArticles = () => {
        axios.get(this.url + "articles/last")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });

                console.log(this.state);
            });
    }

    getArticles = () => {
        axios.get(this.url + "articles")
            .then(res => {
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
                            <Moment fromNow>{article.date}</Moment>
                        </span>
                        <Link to={'/blog/articulo/'+article._id}>Leer más</Link>
                        
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