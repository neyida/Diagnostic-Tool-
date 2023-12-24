
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import{getCollections, getDocs} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
  
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBw51dfHPhBl9_L5PEhtqLAAgL_44zIgyY",
    authDomain: "diagnostic-page-8c6e0.firebaseapp.com",
    projectId: "diagnostic-page-8c6e0",
    storageBucket: "diagnostic-page-8c6e0.appspot.com",
    messagingSenderId: "877960485334",
    appId: "1:877960485334:web:db35e3224ff272fe43ec77",
    measurementId: "G-WQZNQ0RW6F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
