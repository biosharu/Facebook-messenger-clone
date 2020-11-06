import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyDoVVlqJegYxVLHq4Uiki0fiwP1t6A7ZbA",
    authDomain: "facebook-messenger-clone-bc05a.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-bc05a.firebaseio.com",
    projectId: "facebook-messenger-clone-bc05a",
    storageBucket: "facebook-messenger-clone-bc05a.appspot.com",
    messagingSenderId: "349097985805",
    appId: "1:349097985805:web:12d1a86b77c21d4a2b1244",
    measurementId: "G-227XZT4TVH"

});

const db =  firebaseApp.firestore();

export default db;   