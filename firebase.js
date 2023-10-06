import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VUE_APP_INVOICE_API_KEY,
  authDomain: import.meta.env.VUE_APP_INVOICE_AUTH_DOMAIN,
  projectId: import.meta.env.VUE_APP_INVOICE_PROJECT_ID,
  storageBucket: import.meta.env.VUE_APP_INVOICE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VUE_APP_INVOICE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VUE_APP_INVOICE_APP_ID,
  measurementId: import.meta.env.VUE_APP_INVOICE_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();
const firestore = firebase.firestore();
export { firebaseAuth, firestore };
