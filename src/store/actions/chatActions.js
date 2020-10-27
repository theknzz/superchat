export const sendMessage = (message) => {
    return ( dispatch, getState, { getFirebase, getFirestore }) => {

        const firebase = getFirebase();
        const firestore = firebase.firestore();
        const auth = firebase.auth();

        const { uid, photoURL } = auth.currentUser;

        console.log('uid: ' + uid + ' photoUrl: ' + photoURL)
        firestore.collection('messages').add({
            content: message,
            uid,
            photoURL,
            createAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).then( res => {
            console.log(res);
            dispatch({type: 'MESSAGE_SENT'});
        }).catch( err => {
            console.error(err);
            dispatch({ type: 'MESSAGE_ERROR'})
        });
    }
}