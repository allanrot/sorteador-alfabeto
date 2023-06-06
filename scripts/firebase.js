// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAvmysrZ5YroiD4l3AdgfADCOH9wu-o4U",
  authDomain: "sorteador-alfabeto.firebaseapp.com",
  projectId: "sorteador-alfabeto",
  storageBucket: "sorteador-alfabeto.appspot.com",
  messagingSenderId: "916319353094",
  appId: "1:916319353094:web:f31c3ea5ee60b0ac02c687",
  measurementId: "G-KS5ESFM8ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);