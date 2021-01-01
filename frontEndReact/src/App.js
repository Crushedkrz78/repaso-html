import logo from './assets/img/logo.svg';
import './assets/css/App.css';

// Importar Componentes de Maquetacion
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Impportar componentes de Pruebas
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';

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
      <Header/>
      <Slider 
        title="Bienvenidos al Curso de ReactJS"
        btn={buttonString}
      />
      
      <div className="center">
        <Peliculas/>
        <Sidebar/>
      </div>
      <div className="clearfix"></div>
      <Footer/>

    </div>
  );
}

export default App;
