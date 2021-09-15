import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyApkyOs4SQkOO45LOqdZZBxZnIuyyJIvbY",
    authDomain: "resume-builder-1d74b.firebaseapp.com",
    projectId: "resume-builder-1d74b",
    storageBucket: "resume-builder-1d74b.appspot.com",
    messagingSenderId: "568195827449",
    appId: "1:568195827449:web:1fe1955cd83ad903674428"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
