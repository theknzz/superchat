const initialState =  {
    authError: '',
    isAuthenticated: false,
}

const authReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: 'hello '+ action.user,
                isAuthenticated: true,
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed',
                isAuthenticated: false,
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                authError: null,
                isAuthenticated: false,
            };
        case 'LOGOUT_ERROR':
            return {
                ...state,
                authError: 'Logout failed',
                isAuthenticated: true,
            };
        default:
            return state;
    }
}

export default authReducer;