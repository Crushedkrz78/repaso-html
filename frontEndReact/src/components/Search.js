import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Search extends Component{

    state = {
        articles: {},
        status: 'failed'
    }

    render(){
        var searched = this.props.match.params.search;

        return(
            <div id="blog">
                <Slider 
                    title={'Busqueda: '+searched}
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Últimos artículos</h1>
                        {/*Listado de artículos de la API */}
                        <Articles
                            search={searched}
                        />
                        
                    </div>

                    <Sidebar
                        blog="true"
                    />
                </div>
            </div>
        );
    }
}

export default Search;