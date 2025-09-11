// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate.firebaseapp.com",
  projectId: "mern-estate",
  storageBucket: "mern-estate.firebasestorage.app",
  messagingSenderId: "1093004950552",
  appId: "1:1093004950552:web:8a4279f1ec7d72da5a976d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
