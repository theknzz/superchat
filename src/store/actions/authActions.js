export const signIn = () => {
    return ( dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const auth = firebase.auth();
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider)
            .then( res => {
                dispatch({type: 'LOGIN_SUCCESS', user: auth.currentUser.displayName});
            })
            .catch( err => {
                dispatch({type: 'LOGIN_ERROR'});
                console.error('login error: ' + err.message);
            });
    }
}

export const signOut = () => {
    return ( dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const auth = firebase.auth();

        auth.signOut().then( res => {
            dispatch({type: 'LOGOUT_SUCCESS'})
        }).catch( err => {
            console.error(err)
            dispatch({type: 'LOGOUT_ERROR'})
        });
    }
}