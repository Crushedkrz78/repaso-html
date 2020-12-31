import logo from './assets/img/logo.svg';
import './assets/css/App.css';

// Importar Componente
import MiComponente from './components/MiComponente';
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola, bienvenido al curso de React de Víctor Robles.
        </p>
        {holaMundo(nombre, edad)}
      </header>
      <section className="componentes">
        <MiComponente/>
        <Peliculas/>
      </section>
    </div>
  );
}

export default App;
