import React, {Fragment, useState, useRef} from 'react'
import { useFirestoreConnect } from "react-redux-firebase";
import ChatMessage from './ChatMessage'
import { connect } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import NewMessageFrom from "./NewMessageForm";
import styled from '@emotion/styled'


const Container = styled.div`
    padding: 20px;
`

const ChatRoom = ({ messages }) => {

    useFirestoreConnect([
        { collection: 'messages', orderBy: ['createAt', 'asc']}
    ])

    const auth = useFirebase().auth();

    const list = messages && messages.map(message => {
        return (
            <ChatMessage key={message.id} content={message.content} photoUrl={message.photoURL} status={auth.currentUser.uid === message.uid ? 'sent': 'received'}/>
        );
    })

    return (
        <>
            <Container>
                {list}
            </Container>
            <NewMessageFrom/>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        messages: state.firestore.ordered.messages,
    }
}


export default connect(mapStateToProps)(ChatRoom)