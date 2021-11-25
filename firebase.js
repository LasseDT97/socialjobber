import firebase from 'firebase/app';
//import 'firestore/firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyBEhr9228pzQPGZt3Y6mYxnmS60m--dpms",
        authDomain: "socialjobber-f9ab1.firebaseapp.com",
        projectId: "socialjobber-f9ab1",
        storageBucket: "socialjobber-f9ab1.appspot.com",
        messagingSenderId: "64509334152",
        appId: "1:64509334152:web:f5d1d6fbb633fed4dcc53d"
    };

firebase.initializeApp(firebaseConfig);

export default firebase;
