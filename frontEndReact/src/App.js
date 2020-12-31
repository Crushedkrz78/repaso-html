import logo from './assets/img/logo.svg';
import './assets/css/App.css';

// Importar Componente
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

// Importar Componentes de Maquetacion
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';

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

  return (
    <div className="App">
      <Header/>
      <Slider/>
      
      <div className="center">
        <section id="content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hola, bienvenido al curso de React de Víctor Robles.
          </p>
          {holaMundo(nombre, edad)}

          <section className="componentes">
            <MiComponente/>
            <Peliculas/>
          </section>
        </section>
        <Sidebar/>
      </div>

    </div>
  );
}

export default App;
