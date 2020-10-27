import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import {signIn, signOut} from '../store/actions/authActions'
import styled from '@emotion/styled'

const Links = styled.div`
    display: flex;
`

const Button = styled.button`
    background-color: #2a2f32;
    color: lightgrey;
    font-size: 2em;
    margin: 15px;
    border: none;
`

const SignIn = (props) => {
    return (
        <Links>
            <Button onClick={() => props.signIn()}>In</Button>
            <Button onClick={() => props.signOut()}>Out</Button>
        </Links>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => dispatch(signIn()),
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.auth.authError,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)