import express from 'express';
import bodyParser from 'body-parser';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

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
//const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp)
// Endpoint to store user input in Firebase
app.post('/storeUserInputs', async (req, res) => {
  try {
    const formData = req.body.formData;

    // Store userInput in Firestore
    const docRef = await addDoc(collection(db, 'users', formData.studentEmail, 'studentInfo'), {
      formData: formData
    });
    console.log('Document written with ID: ', docRef.id);
    res.status(200).json(`User input stored successfully with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).json({ error: 'Error storing user input: ' + error });
  }
});
// Other endpoints for data retrieval if needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
