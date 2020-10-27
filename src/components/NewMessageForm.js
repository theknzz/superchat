import React, {useState} from 'react'
import {sendMessage} from "../store/actions/chatActions";
import {connect} from 'react-redux'
import {useFirebase} from "react-redux-firebase";
import styled from "@emotion/styled";


const Form = styled.form`
    display: flex;
    height: 10vh;
    background-color: lightgreen;
    bottom: 0;
    width: 100%;
    position: fixed;
    background-color: #262d31;
`

const Input = styled.input`
    flex: 1;
    font-size: 1em;
    background-color: #33383b;
    color: white;
    padding: 0px 20px;
    border:none;
    border-radius: 100px;
    margin: 20px 0px;
    margin-left: 40px;
    &: focus {
        outline: none;
    }
`

const Button = styled.button`
    flex: 0 10vw;
    color: lightgreen;
    font-size: 2em;
    background-color: #262d31;
    border: none;
    &: disabled {
        opacity: 0.2;
        color: lightgrey;
    }
`

const NewMessageFrom = ({ send }) => {

    const [input, setInput] = useState('');

    const auth = useFirebase().auth();

    const handleSubmit = e => {
        e.preventDefault();
        if (auth.currentUser) {
            send(input);
            setInput('');
        }
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                onChange={(e) => {
                    setInput(e.target.value)
                }}
                value={input}
            />
            <Button disabled={!input}>➡</Button>
        </Form>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        send: (message) => dispatch(sendMessage(message))
    }
}

export default connect(null, mapDispatchToProps)(NewMessageFrom)