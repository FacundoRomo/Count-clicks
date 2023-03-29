import { useState } from 'react';
import './App.css';
import Boton from './component/boton/boton';
import Contador from './component/contador/contador';


function App() {

  const [numClics, setNumClics] = useState(0);
  
  const manejarClick = () =>{
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () =>{
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <h1>Contador de clicks!</h1>
      </div>
      <div className='contenedor'>
        <Contador numCliks={numClics} />
        <Boton
          tipo='Click'
          manejarClick={manejarClick} />
        <Boton
          tipo='Reiniciar'
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
