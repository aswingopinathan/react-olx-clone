import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBEBFy6zSyA3QcDgkXPOUSelLHwTeIK9x4",
    authDomain: "olx-clone-7c69d.firebaseapp.com",
    projectId: "olx-clone-7c69d",
    storageBucket: "olx-clone-7c69d.appspot.com",
    messagingSenderId: "1044214980696",
    appId: "1:1044214980696:web:91879f81a6ada129102a2d",
    measurementId: "G-S7K6ZG8QYD"
  };

export default firebase.initializeApp(firebaseConfig)