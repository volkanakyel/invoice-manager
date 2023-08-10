// firebase.js
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV3yufuyo6IBEXCv3vbvf6ouowWEUJKrc",
  authDomain: "invoice-motion.firebaseapp.com",
  projectId: "invoice-motion",
  storageBucket: "invoice-motion.appspot.com",
  messagingSenderId: "542077379717",
  appId: "1:542077379717:web:3e4cef25514ef28fe8b5ec",
  measurementId: "G-EHS6R2BPHJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();
export { firebaseAuth };
