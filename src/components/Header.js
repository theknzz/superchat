import React from 'react'
import SignIn from "./SignIn";
import styled from '@emotion/styled'

const Navbar = styled.div`
    height: 10vh;
    display: flex;
    background-color: #2a2f32;
`

const Logo = styled.h1`
    flex: 1;
    margin: 20px;
    color: white;
`

const Header = ({ isIn }) => {
    return(
        <Navbar>
            <Logo>🍒🔥</Logo>
            <SignIn isIn={isIn}/>
        </Navbar>
    );
}

export default Header;