import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCGUkjDD7fXCaUTM7uTwh4Fngrf7G3b2bk",
    authDomain: "udemy-vue-firebase-sites-7634a.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-7634a",
    storageBucket: "udemy-vue-firebase-sites-7634a.appspot.com",
    messagingSenderId: "411885645208",
    appId: "1:411885645208:web:d9fe636c8447a0df0a4fed"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init firestore service
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp }