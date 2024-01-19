// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuJYQghnY4wx0SKgMnK4goBGjutm_uifA",
  authDomain: "hotelbackend-6e459.firebaseapp.com",
  projectId: "hotelbackend-6e459",
  storageBucket: "hotelbackend-6e459.appspot.com",
  messagingSenderId: "761938979378",
  appId: "1:761938979378:web:dce2c1b761e218a1e46a2b",
  measurementId: "G-9G4KEXSFMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);