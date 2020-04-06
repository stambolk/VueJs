import firebase from 'firebase'
import firestore from 'firebase/firestore'
  
  var firebaseConfig = {
    apiKey: "AIzaSyBz11FlMEfChhYpSb1JyWPOeH7r8qFbXwI",
    authDomain: "cocochatz.firebaseapp.com",
    databaseURL: "https://cocochatz.firebaseio.com",
    projectId: "cocochatz",
    storageBucket: "cocochatz.appspot.com",
    messagingSenderId: "650388969432",
    appId: "1:650388969432:web:224e2d2a001941f94fc4ad"
  };
 
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 firebaseApp.firestore()
 export default firebaseApp.firestore()

