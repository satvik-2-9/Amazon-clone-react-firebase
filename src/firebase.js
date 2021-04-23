import firebase from "firebase"; 


const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyBzjksuRVHvwFpmIz9mHRYm11Gq806CsYc",
    authDomain: "clone-1f7a5.firebaseapp.com",
    projectId: "clone-1f7a5",
    storageBucket: "clone-1f7a5.appspot.com",
    messagingSenderId: "264849390309",
    appId: "1:264849390309:web:197ad521fb67e80e75320c",
    measurementId: "G-937S7YK32E"
});

// using firebase for database and authentication.


const auth = firebase.auth();

export {auth}; 