import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBZKooNLRT10EVD2UEvh5N0xoCCz1HPMI8",
  authDomain: "udemy-vue-firebase-ff78a.firebaseapp.com",
  projectId: "udemy-vue-firebase-ff78a",
  storageBucket: "udemy-vue-firebase-ff78a.firebasestorage.app",
  messagingSenderId: "634151153490",
  appId: "1:634151153490:web:386eb806b67c81750a548b"
};

//init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

const projectAuth = firebase.auth()

export { projectFirestore, timestamp, projectAuth }