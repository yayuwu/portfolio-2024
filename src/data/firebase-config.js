// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2VSWhZcWpF1KgfiWoaJbU2ZlbmqOyauI",
  authDomain: "yael-portfolio-2024.firebaseapp.com",
  projectId: "yael-portfolio-2024",
  storageBucket: "yael-portfolio-2024.appspot.com",
  messagingSenderId: "1022452831991",
  appId: "1:1022452831991:web:f1f43506e490571834e5f2",
  measurementId: "G-3SD28MYD9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Inicializa los servicios que necesitas
const db = getFirestore(app);

export { db };
