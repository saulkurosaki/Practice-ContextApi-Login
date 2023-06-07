import React, { useContext } from 'react';
import { Routes,Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Acerca } from '../components/Acerca';
import { Contacto } from '../components/Contacto';
import { Login } from '../components/Login';
import { PruebaContext } from '../context/PruebaContext';

export const AppRouter = () => {

  const {usuario, setUsuario} = useContext(PruebaContext);

  return (
    <BrowserRouter>
    
    {/* Menu Navegación */}

    <header className='header'>
      <nav>
        <div className='logo'>
          <h2>Practica React Context</h2>
        </div>

        <ul>
          <li>
            <NavLink to='/inicio'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/articulos'>Articulos</NavLink>
          </li>
          <li>
            <NavLink to='/acerca'>Acerca</NavLink>
          </li>
          <li>
            <NavLink to='/contacto'>Contacto</NavLink>
          </li>
          <li>
            {usuario.nick !== null ? (
              <>
                <NavLink to='/'><strong>{usuario.nick}</strong></NavLink>
                <a href='#' onClick={e => {
                  e.preventDefault();
                  setUsuario({
                    nick: null,
                    nombre: '-Aquí va el nombre-', 
                    apellidos: '-Aquí va el apellido-'
                  });
                }}>Cerrar Sesión</a>
              </>
            ):(
              <NavLink to='/login'>Login</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>

    {/* Configurar rutas */}

    <section className='content'>
      <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/articulos' element={<Articulos />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/login' element={<Login />} />

          <Route path='*' element={
            <div>
                <h1>ERROR 404: Esta pagina no existe</h1>
            </div>
          } />
      </Routes>
    </section>
    
    </BrowserRouter>
  )
}
