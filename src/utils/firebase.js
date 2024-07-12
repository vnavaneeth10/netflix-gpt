// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCV0bHwz2te0MnPgN52sJnM2Vt0G86vqZg",
  authDomain: "netflixgpt-c2ff8.firebaseapp.com",
  projectId: "netflixgpt-c2ff8",
  storageBucket: "netflixgpt-c2ff8.appspot.com",
  messagingSenderId: "788544255773",
  appId: "1:788544255773:web:207544bf12de074291d3f4",
  measurementId: "G-5ZRDVVJSCV"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
