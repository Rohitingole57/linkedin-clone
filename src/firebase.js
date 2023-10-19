// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtOGbeAmZ2kOGPqeSHeVZlBVf5pNYEURs",
  authDomain: "linkedin-clone-7a87b.firebaseapp.com",
  projectId: "linkedin-clone-7a87b",
  storageBucket: "linkedin-clone-7a87b.appspot.com",
  messagingSenderId: "578072308886",
  appId: "1:578072308886:web:3919189cc339502255a6b7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};