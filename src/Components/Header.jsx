import React from 'react';
import { NavLink} from 'react-router-dom';
import ContenedorHeader from '../StylesElements/StylesComponents/ContenedorHeader';
import Titulo from '../StylesElements/StylesComponents/Titulo';
import Menu from '../StylesElements/StylesComponents/Menu';
const Header = () => {
    return ( 
        <ContenedorHeader>
            <Titulo>Mi Blog Personal</Titulo>
            <Menu>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/acerca-de">Acerca de</NavLink>
            </Menu>
        </ContenedorHeader>
     );
}
 
export default Header;