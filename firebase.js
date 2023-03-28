// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAUcYaPz__-QqHasMdme9rbTBxiZUzPiM",
  authDomain: "foodhope-96455.firebaseapp.com",
  projectId: "foodhope-96455",
  storageBucket: "foodhope-96455.appspot.com",
  messagingSenderId: "1067047377375",
  appId: "1:1067047377375:web:14eef17d4f85762bdccc6a",
  measurementId: "G-EZ7XCK9QMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
export {auth}
export const db = getFirestore(app);