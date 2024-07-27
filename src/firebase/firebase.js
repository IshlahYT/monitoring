// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQW32N3hIcgEX-EHwaC4MmZcNJJY3lymk",
  authDomain: "auth-3713e.firebaseapp.com",
  projectId: "auth-3713e",
  storageBucket: "auth-3713e.appspot.com",
  messagingSenderId: "807246004190",
  appId: "1:807246004190:web:db8735be1efed07ad6a74f",
  measurementId: "G-12RX9BD3H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};