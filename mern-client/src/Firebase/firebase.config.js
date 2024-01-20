// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgcTFnBi-gxT_30s7mSWFzr5u34WKbivU",
  authDomain: "mern-book-inventory-c44e9.firebaseapp.com",
  projectId: "mern-book-inventory-c44e9",
  storageBucket: "mern-book-inventory-c44e9.appspot.com",
  messagingSenderId: "929797964098",
  appId: "1:929797964098:web:7941d16c24d803bdaa88db",
  measurementId: "G-JP0XE3W379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default app;