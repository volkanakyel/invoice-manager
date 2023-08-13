import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_INVOICE_API_KEY,
  authDomain: process.env.VUE_APP_INVOICE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_INVOICE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_INVOICE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_INVOICE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_INVOICE_APP_ID,
  measurementId: process.env.VUE_APP_INVOICE_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();
const firestore = firebase.firestore();
export { firebaseAuth, firestore };
