// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJKn1eWwux0XCJkQFVD3GX-GSuDy5BbV0",
  authDomain: "musician-connect-42b31.firebaseapp.com",
  projectId: "musician-connect-42b31",
  storageBucket: "musician-connect-42b31.firebasestorage.app",
  messagingSenderId: "1095877965097",
  appId: "1:1095877965097:web:e5aef8b05b78a2b0ce3338",
  measurementId: "G-993P0KK9H9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;