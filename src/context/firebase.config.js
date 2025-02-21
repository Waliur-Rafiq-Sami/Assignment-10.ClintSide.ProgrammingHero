// Import the functions you need from the SDKs you need
import { initializeApp, getAuth } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt3bj4OFXp3_FY0zielpItxa6CIRIrk4s",
  authDomain: "artfusion-f9745.firebaseapp.com",
  projectId: "artfusion-f9745",
  storageBucket: "artfusion-f9745.firebasestorage.app",
  messagingSenderId: "92762135874",
  appId: "1:92762135874:web:bbf76c4fa44649a027bcdb",
  measurementId: "G-4P87PZS8SH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(analytics);

export default auth;
