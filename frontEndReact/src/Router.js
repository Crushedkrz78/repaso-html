import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Importar componentes a Routear
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';

import Header from './components/Header';

import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';

class Router extends Component {

    render(){
        return(
            <BrowserRouter>
                <Header/>
                
                

                {/* Configurar rutas y páginas */}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/ruta-prueba" component={SeccionPruebas}/>
                    <Route exact path="/segunda-ruta" component={MiComponente}/>

                    <Route exact path="/pagina-1" render={() => (
                        <React.Fragment>
                            <h1>Hola Mundo desde a ruta Página 1</h1>
                            <MiComponente saludo="Hola amigo"/>
                        </React.Fragment>
                    )}/>

                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                        var nombre = props.match.params.nombre;
                        var apellidos = props.match.params.apellidos;
                        return(
                            <div id="content">
                                <h1 className="subheader">Página de pruebas</h1>
                                <h2>
                                    {nombre && !apellidos &&
                                        <React.Fragment>
                                            {nombre}
                                        </React.Fragment>
                                    }
                                </h2>
                                <h2>
                                    {nombre && apellidos &&
                                        <React.Fragment>
                                            {nombre} {apellidos}
                                        </React.Fragment>
                                    }
                                </h2>
                            </div>
                        );
                    }}/>

                    <Route component={Error}/>
                </Switch>


                
                {/*<Peliculas/>*/}
                <Sidebar/>
                
                <div className="clearfix"></div>
                <Footer/>
                
                
            </BrowserRouter>
        );
    }
}

export default Router;