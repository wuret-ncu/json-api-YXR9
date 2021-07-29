import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0PM7QVbJNdtcag3Iy_MolbhtiKwegSZ8",
    authDomain: "fir-react-auth-3b01a.firebaseapp.com",
    projectId: "fir-react-auth-3b01a",
    storageBucket: "fir-react-auth-3b01a.appspot.com",
    messagingSenderId: "710587850388",
    appId: "1:710587850388:web:0555077b25ad36b2db1e81",
    measurementId: "G-NRX8FTXYPM"
});

const db =  firebaseApp.firestore();

export { db };