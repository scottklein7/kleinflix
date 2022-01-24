import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBGfgNvDNTZRR9aCTXIKhVl0yHbMt_lWQU",
    authDomain: "kleinflix-f0e06.firebaseapp.com",
    projectId: "kleinflix-f0e06",
    storageBucket: "kleinflix-f0e06.appspot.com",
    messagingSenderId: "515960203259",
    appId: "1:515960203259:web:426a4c405c0ffc88898d5e"
  };

  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth() 
  const provider = new firebase.auth.EmailAuthProvider()

  function login() {
    return auth.signInWithPopup(provider)
  }

  function logout() {
    return auth.signOut()
  }

  export { auth, login, logout }