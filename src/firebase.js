// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsL6I7XP9OysLAGT3D7t5ipjOzS8-eD5k",
  authDomain: "react-auth-2efc9.firebaseapp.com",
  projectId: "react-auth-2efc9",
  storageBucket: "react-auth-2efc9.appspot.com",
  messagingSenderId: "290823853780",
  appId: "1:290823853780:web:2a3c81fc5b80546a2f4d41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
