import React from 'react'
import styled from '@emotion/styled'
import Auth from "./Auth";

const Navbar = styled.div`
    height: 10vh;
    display: flex;
    background-color: #2a2f32;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
`

const Logo = styled.h1`
    flex: 1;
    margin: 20px;
    color: orange;
`

const Header = ( props ) => {
    return(
        <Navbar>
            <Logo>⚛️🔥💬</Logo>
            <Auth />
        </Navbar>
    );
}

export default Header;