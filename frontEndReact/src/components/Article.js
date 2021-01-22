import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';

class Article extends Component {
    //
    render(){
        return(
            <section id="content">
                    <article className="article-item article-detail">
                        <div className="image-wrap">
                            <img src="https://www.viajejet.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada-1440x810.jpg" alt="paisaje"/>
                        </div>
                        <h1 className="subheader">Artículo de Prueba</h1>
                        <span className="date">
                            Hace 5 minutos
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aliquam varius, risus non efficitur congue, tellus est venenatis ligula, 
                            id porttitor ligula purus eget magna. Donec vulputate congue quam, sed malesuada odio auctor id. 
                            Aliquam vel sem ut elit viverra ullamcorper. Nulla quis feugiat sem. Donec a euismod eros, in sodales magna. 
                            Maecenas dignissim massa a aliquet rutrum. Morbi dapibus eros et leo suscipit, ac euismod mi mollis. 
                            Donec magna lectus, feugiat ut nisl venenatis, cursus interdum diam. Vestibulum nec ligula tortor. 
                            Sed tincidunt leo a massa pulvinar placerat. Nunc feugiat lectus sed sem pulvinar, tempor fermentum erat tincidunt. 
                            Sed ut mi vitae ligula tincidunt maximus. Duis fringilla nulla vel turpis feugiat sodales.
                        </p>
                        <p>
                            Nullam mauris libero, egestas sit amet justo non, hendrerit condimentum turpis. 
                            In mollis imperdiet lacus, sed tincidunt dolor. Donec luctus egestas mi sit amet malesuada. 
                            Nullam metus justo, consectetur id porttitor sit amet, vestibulum sit amet dui. 
                            Nam ac vehicula leo. Duis elementum, nibh eget fermentum ullamcorper, risus nulla aliquet tellus,
                            scelerisque mollis tellus ex eget magna. Suspendisse vitae massa quis ante ullamcorper sodales ut eget nisi.
                        </p>
                        <p>
                            Suspendisse dignissim orci non nunc ornare, a rhoncus eros aliquam. 
                            Sed mattis turpis et lorem porta condimentum. 
                            Vivamus consequat risus et enim placerat, vitae luctus libero dictum. 
                            Integer lacinia dolor sapien, at faucibus ipsum fringilla vel. Ut feugiat cursus nisl et suscipit. 
                            Integer eget quam sit amet dolor mattis egestas. Quisque consectetur, dui nec placerat condimentum, 
                            velit tellus porttitor mi, sed faucibus nulla eros vel sem. Mauris auctor tortor ac erat lacinia pretium. 
                            Sed ornare eros nec purus fermentum ullamcorper quis et velit.
                        </p>
                        <div className="clearfix"></div>
                    </article>

                    <Sidebar/>
            </section>
        );
    }
}

export default Article;