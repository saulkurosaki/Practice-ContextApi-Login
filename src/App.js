import './App.css';
import { AppRouter } from './router/AppRouter';
import { PruebaContext } from './context/PruebaContext';
import { useState } from 'react';

function App() {

  const [usuario, setUsuario] = useState({
    nick: '@saulkurosaki',
    nombre: 'Saul', 
    apellidos: 'Paredes Fano'
  });

  return (
    <div className="App">
      <PruebaContext.Provider value={{
        usuario,
        setUsuario,
      }}>
        <AppRouter />
      </PruebaContext.Provider>

    </div>
  );
}

export default App;
