import React, {Component} from 'react';
import logo from '../assets/img/logo.svg';

class Header extends Component {
    render(){
        return(
            <header id="header">
            <div className="center">
                {/*LOGO */}
                <div id="logo">
                    <img src={logo} className="app-logo" alt="logotipo"/>
                    <span id="brand">
                        <strong>Curso</strong> ReactJS
                    </span>
                </div>
                {/*Menú de navegación */}
                <nav id="menu">
                    {/*Enlaces de Navegación */}
                    <ul>
                        <li>
                            <a href="index.html">Inicio</a>
                        </li>
                        <li>
                            <a href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="formulario.html">Formulario</a>
                        </li>
                        <li>
                            <a href="#">Pagina 1</a>
                        </li>
                        <li>
                            <a href="#">Pagina 2</a>
                        </li>
                    </ul>
                </nav>

                {/*Limpiar Float */}
                <div className="clearfix"></div>
            </div>
        </header>
        );
    }
}

export default Header;