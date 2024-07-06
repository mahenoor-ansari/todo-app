import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkE-KGOx7uNS-QaxnKHQX63blRIqiRe8Q",
  authDomain: "todo-eb0c9.firebaseapp.com",
  projectId: "todo-eb0c9",
  storageBucket: "todo-eb0c9.appspot.com",
  messagingSenderId: "267583343535",
  appId: "1:267583343535:web:e973de74b9c3c9ea12fd5a",
  measurementId: "G-RD126W1KHL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);