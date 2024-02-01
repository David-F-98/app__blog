import styled from "styled-components";

const Menu = styled.nav`
    a{
        text-decoration: none;
        color: #165168;
        margin: 0rem .625rem;
    }

    a:hover{
        color: #197668;
    }

    a.active{
        border-bottom: .125rem solid #165168;
        padding-bottom: .1875rem;
    }
`;

export default Menu;