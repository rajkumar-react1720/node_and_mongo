import React from 'react';
import styled from 'styled-components';


//STYLES
import { pizzaRed } from '../styles/colors';
import { TitleStyle } from '../styles/title';

const NavbarStyles = styled.div`
    background-color: ${pizzaRed}
    padding: 15px;
    position: fixed;
    width: 100%;
`;

const Logo = styled(TitleStyle)`
    font-size: 25px;
    color: white;
    text-shadow: 1px 1px 2px black;
`;


export default function navBarComponent() {
    return(
        <NavbarStyles>
            <Logo>Sliceline <span role='img' aria-label='pizza slice'>🍕</span></Logo> 
        </NavbarStyles>
    )
}