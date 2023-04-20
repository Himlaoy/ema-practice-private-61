// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhfTFAQPkugBAB911vxqI6ALMiKdvXLPg",
  authDomain: "emma-fire-private-recap.firebaseapp.com",
  projectId: "emma-fire-private-recap",
  storageBucket: "emma-fire-private-recap.appspot.com",
  messagingSenderId: "336212773717",
  appId: "1:336212773717:web:6d31c9f4f1a7c9ff163ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;