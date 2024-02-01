import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PaginaDeInicio from './Components/PaginaDeInicio';
import Blog from './Components/Blog';
import Post from './Components/Post';
import AcercaDe from './Components/AcercaDe';
import Header from './Components/Header';
import ContenedorPrincipal from './StylesElements/StylesApp/ContenedorPrincipal';
import Main from './StylesElements/StylesApp/Main';



// Para trabajar con Reac Route tener en cuenta:
// Usar BrowserRouter, NavLink, Route, Routes
//  1. Encerrar dentro de BrowserRouter toda la estructura
//  2. En vez de usaar <a href=''> </a>   USAR  <NavLink to=""></ NavLink> 
//  3. Dentro del main usar la etiqueta <Routes> para que no se recargue toda la página
//  4. La estructura principal que debe tener cada ruta que vayamos a tener va a ser: <Route path='#' element={poner-el-componente} />
const App = () => {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header/>
        <Main>
          <Routes>
            <Route  path='/' element={<PaginaDeInicio/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/post/:id' element={<Post/>}/>
            <Route path='/acerca-de' element={<AcercaDe/>}/>
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
}
 
export default App;