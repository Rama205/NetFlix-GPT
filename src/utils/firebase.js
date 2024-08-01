// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2kERbVRWsc8clAzjZNxTNQB0o6_LnFZI",
  authDomain: "netflix-gpt-4ce4c.firebaseapp.com",
  projectId: "netflix-gpt-4ce4c",
  storageBucket: "netflix-gpt-4ce4c.appspot.com",
  messagingSenderId: "45077220470",
  appId: "1:45077220470:web:39c5aa5e1abc7646d6e357",
  measurementId: "G-TL8HSKB9PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();