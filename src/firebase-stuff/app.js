const express = require('express');
const bodyParser = require('body-parser');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
//const { getAnalytics } = require("firebase/analytics");
const cors = require('cors');
const requestIp = require('request-ip');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(requestIp.mw());

// Firebase configuration
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
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

// Endpoint to store user input in Firebase
app.post('/storeUserInputs', async (req, res) => {
  try {
    const formData = req.body.formData;
    const clientIp = req.clientIp;
    // Store userInput in Firestore
    const docRef = await addDoc(collection(db, 'users', clientIp, 'studentInfo'), {
      formData: formData
    });
    console.log('Document written with ID: ', docRef.id);
    res.status(200).json(`User input stored successfully with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).json({ error: 'Error storing user input: ' + error });
  }
});

// Other endpoints for data retrieval if needed
app.post('/storeQuizResults', async (req, res) => {
  try {
    const quizResults = req.body.quizResults;
    //console.log(quizResults);
    const clientIp = req.clientIp;
    // Store userInput in Firestore
    const docRef = await addDoc(collection(db, 'users', clientIp, 'quizResults'), {
      quizResults
    });
    console.log('Document written with ID: ', docRef.id);
    res.status(200).json(`User input stored successfully with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).json({ error: 'Error storing user input: ' + error });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
