import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Blog extends Component{

    render(){

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