// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrSs3Hybk1U-mC2dMi_3J4K5K6k8QA2s8",
  authDomain: "hagerweb-507e9.firebaseapp.com",
  projectId: "hagerweb-507e9",
  storageBucket: "hagerweb-507e9.appspot.com",
  messagingSenderId: "1083917148100",
  appId: "1:1083917148100:web:74388c35db2e3cf5348e91",
  measurementId: "G-CJKNH12S43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
