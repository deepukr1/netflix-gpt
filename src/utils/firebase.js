// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlzrfHQGHu9jXKFaHpwquLVy9F-qVQTZk",
  authDomain: "netflix-gpt-922d8.firebaseapp.com",
  projectId: "netflix-gpt-922d8",
  storageBucket: "netflix-gpt-922d8.appspot.com",
  messagingSenderId: "267816450693",
  appId: "1:267816450693:web:15c396145af81a17edc7ec",
  measurementId: "G-03568LJZ99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();