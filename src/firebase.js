import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5e3q99y1p9dAP1dEpLxNdW80cl7gTkVw",
  authDomain: "todo-app-mahenoor.firebaseapp.com",
  projectId: "todo-app-mahenoor",
  storageBucket: "todo-app-mahenoor.appspot.com",
  messagingSenderId: "347937632104",
  appId: "1:347937632104:web:8016e380d0048e8e8f70dd",
  measurementId: "G-ZKE6WYR8FB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);