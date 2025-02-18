import logo from './logo.svg';
import './App.css';

import { MiAplicacion } from './views/MiAplicacion'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main> 
        <p>Lo de arriba es lo que viene por defecto, recién creado un proyecto con <code>npx create-app-react</code>. No he quitado nada por conservar lo que viene tal cual...</p>
        <p>De aquí en adelante van mis pruebas...</p>
        <p>En el código, mis pruebas son las carpetas <code>assets</code>, <code>components</code>, <code>services</code>, <code>store</code>, <code>utils</code> y <code>views</code>. (Esas carpetas y su contenido no venian en el proyecto recién creado. El resto de carpetas y archivos si.)</p>
        < MiAplicacion />
      </main>
    </div>
  );
}

export default App;
