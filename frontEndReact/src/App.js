import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import Router from './Router';

// Importar Componentes de Maquetacion
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Impportar componentes de Pruebas
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';

// Importar Componente de Routing

function holaMundo(nombre, edad){
  var presentacion = <div>
    <h2>Hola, soy {nombre}</h2>
    <h3>y tengo {edad} años</h3>
  </div>
  return presentacion;
}

function App() {
  var nombre = "Cristian Perez";
  var edad = 27;

  var buttonString = "Ver más";

  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
