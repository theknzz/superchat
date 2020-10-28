import React, {Fragment} from 'react'
import ChatRoom from './components/ChatRoom'
import Header from "./components/Header";

const App = (props) => {
    return (
        <Fragment>
            <Header/>
            <ChatRoom />
        </Fragment>
    );
}

export default App;
