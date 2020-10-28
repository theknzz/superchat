import React from "react";
import styled from '@emotion/styled'

const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.status==='sent'? 'row-reverse' : 'row'};
    margin: 15px 5px;
`

const Avatar = styled.img`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin: 10px;
`

const MessageBalloon = styled.div`
    background-color: #0c4740;
    padding: 10px 20px;
    border-radius: 20px;
    margin: 10px;
    max-width: 600px;
    overflow: auto;
    word-wrap: break-word;
    font-size: 15px;
    color: white;
    align-self: center;
`

const ChatMessage = ({ content, photoUrl, status }) => {
    return (
        <Container status={status}>
            <MessageBalloon>
                {content}
            </MessageBalloon>
            <Avatar src={photoUrl} alt={'photo'}/>
        </Container>
    );
}
export default ChatMessage