const initialData = {
    output: '',
}

const chatReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'MESSAGE_SENT':
            return {
                ...state,
                output: '',
            }
        case 'MESSAGE_ERROR':
            return {
                ...state,
                output: 'Some problem while trying to send the message!'
            }
        default:
            return state;
    }
}

export default chatReducer;