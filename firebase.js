import { StraightOutlined } from "@mui/icons-material";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import "firebase/firestore";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqwLYQcXgoS69Ryg3O_KXOGsS8hHjjzJM",
  authDomain: "movie-directory-5ea9c.firebaseapp.com",
  projectId: "movie-directory-5ea9c",
  storageBucket: "movie-directory-5ea9c.appspot.com",
  messagingSenderId: "587244349954",
  appId: "1:587244349954:web:1b942ff0343f732b83951b",
  measurementId: "G-93PY34Z4YD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, loginWithEmailAndPassword, logout };
