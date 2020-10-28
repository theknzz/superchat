import React, { useEffect, useRef} from 'react'
import { useFirestoreConnect } from "react-redux-firebase";
import ChatMessage from './ChatMessage'
import { connect } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import NewMessageFrom from "./NewMessageForm";
import styled from '@emotion/styled'
import { update } from '../store/actions/authActions'

const MessageBox = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    margin: 10vh 0 15vh;
    overflow-y: auto;
`

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`

const Warning = styled.div`
    display: ${props => props.isIn ? 'none' : 'flex'};
    color: white;
    justify-content: center;
    width: 100%;
    position: fixed;
    bottom: 10vh;
    & > p {
        background-color: #bbb;
        border-radius: 25px;
        padding: 15px;
        opacity: 0.8;
        font-size: 0.7em;
    }
`

const Marker = styled.a`
`

const ChatRoom = (props) => {
    const { messages, isIn, update } = props;

    const auth = useFirebase().auth();

    useFirestoreConnect([
        { collection: 'messages', orderBy: ['createAt', 'asc']}
    ])

    useEffect( () => {
        if (auth) {
            update(auth.currentUser);
        }
    }, [messages])

    const list = messages && messages.map(message => {
        return (
            <ChatMessage
                key={message.id}
                content={message.content}
                photoUrl={message.photoURL}
                status={auth.currentUser === null || auth.currentUser.uid !== message.uid ? 'received' : 'sent'}
            />
        );
    })

    const marker = useRef();

    return (
        <>
            <Container>
                <Warning isIn={isIn}><p>You need to sign in first!</p></Warning>
                <MessageBox>
                    {list}
                    <Marker >  </Marker>
                    <Marker ref={marker}/>
                </MessageBox>
                <NewMessageFrom marker={marker}/>
            </Container>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        messages: state.firestore.ordered.messages,
        isIn: state.auth.isAuthenticated,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (user) => dispatch(update(user))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)