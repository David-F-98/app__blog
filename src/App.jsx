import React from 'react';
import { BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import PaginaDeInicio from './Components/PaginaDeInicio';
import Blog from './Components/Blog';
import AcercaDe from './Components/AcercaDe';
// Para trabajar con Reac Route tener en cuenta:
// Usar BrowserRouter, NavLink, Route, Routes
//  1. Encerrar dentro de BrowserRouter toda la estructura
//  2. En vez de usaar <a href=''> </a>   USAR  <NavLink to=""></ NavLink> 
//  3. Dentro del main usar la etiqueta <Routes> para que no se recargue toda la página
//  4. La estructura principal que debe tener cada ruta que vayamos a tener va a ser: <Route path='#' element={} />
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Mi Blog Personal</h1>
          <nav>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/acerca-de">Acerca de</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route  path='/' element={
              <PaginaDeInicio/>
            }/>
            <Route path='/blog' element={
              <Blog/>
            }/>
            <Route path='/acerca-de' element={
              <AcercaDe/>
            }/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
 
export default App;