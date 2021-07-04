import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHgLQLTBH40Tx2LQq5FlHv2Oua4WKOw6I",
    authDomain: "todo-app-cp-6257f.firebaseapp.com",
    projectId: "todo-app-cp-6257f",
    storageBucket: "todo-app-cp-6257f.appspot.com",
    messagingSenderId: "636469264160",
    appId: "1:636469264160:web:b8992926fbfacd29f9e145",
    measurementId: "G-FSN8RVR305"
});

const db = firebaseApp.firestore();

export default db;