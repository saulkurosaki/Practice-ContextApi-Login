import React from 'react';
import { Routes,Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Acerca } from '../components/Acerca';
import { Contacto } from '../components/Contacto';
import { Login } from '../components/Login';

export const AppRouter = () => {
  return (
    <BrowserRouter>
    
    {/* Menu Navegación */}

    <header className='header'>
      <nav>
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
            <NavLink to='/login'>Login</NavLink>
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
