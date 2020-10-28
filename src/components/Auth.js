import React from 'react'
import { connect } from 'react-redux'
import {signIn, signOut} from '../store/actions/authActions'
import styled from '@emotion/styled'

const Links = styled.div`
    display: flex;
`

const Button = styled.button`
    background-color: #2a2f32;
    color: lightgrey;
    font-size: 1.5em;
    margin: 15px;
    border: none;
`

const Auth = ( props ) => {
    const display = props.isIn ?
        <Button onClick={() => props.signOut()}>Sign Out</Button> :
        <Button onClick={() => props.signIn()}>Sign In</Button>;
    return (
        <Links>
            {display}
        </Links>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => dispatch(signIn()),
        signOut: () => dispatch(signOut()),
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.auth.authError,
        isIn: state.auth.isAuthenticated,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)