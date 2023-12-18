// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBw51dfHPhBl9_L5PEhtqLAAgL_44zIgyY",
    authDomain: "diagnostic-page-8c6e0.firebaseapp.com",
    projectId: "diagnostic-page-8c6e0",
    storageBucket: "diagnostic-page-8c6e0.appspot.com",
    messagingSenderId: "877960485334",
    appId: "1:877960485334:web:b82a2f60ac80b3ed43ec77",
    measurementId: "G-N3FCD2Z2JG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);2

  
