import React, {Component} from 'react';
import logo from '../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';

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
                            <NavLink to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ruta-prueba">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/segunda-ruta">Formulario</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pagina-1">Página 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pruebas/Cristian/Perez">Página 2</NavLink>
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