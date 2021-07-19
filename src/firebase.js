import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDtIBSTEzrZPJxhWjrgzOc-ZogiRBElTg4",
    authDomain: "clone-app-2cc67.firebaseapp.com",
    projectId: "clone-app-2cc67",
    storageBucket: "clone-app-2cc67.appspot.com",
    messagingSenderId: "941429586179",
    appId: "1:941429586179:web:0eae72a36e4703d8b61136"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}