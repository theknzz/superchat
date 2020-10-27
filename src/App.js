import React, {Fragment} from 'react'
import ChatRoom from './components/ChatRoom'
import {connect} from 'react-redux'
import Header from "./components/Header";

const App = ({ auth }) => {
    const isIn = auth.isAuthenticated;
    return (
        <Fragment>
            <Header isIn={isIn}/>
            <ChatRoom />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
}

export default connect(mapStateToProps)(App);
