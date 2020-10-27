import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCY2OoqbWde2rLJjutSIFHMfMeqrjjG7Xs",
    authDomain: "my-superchat-knzz.firebaseapp.com",
    databaseURL: "https://my-superchat-knzz.firebaseio.com",
    projectId: "my-superchat-knzz",
    storageBucket: "my-superchat-knzz.appspot.com",
    messagingSenderId: "918033254761",
    appId: "1:918033254761:web:29579e9e455036d70115f8",
    measurementId: "G-HVPWZZGMGV"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase
