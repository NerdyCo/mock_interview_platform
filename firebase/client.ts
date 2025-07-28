import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNiHdrh6m6zhcSVNyKI34gREFBM9x84aQ",
  authDomain: "prepwise-c9d6e.firebaseapp.com",
  projectId: "prepwise-c9d6e",
  storageBucket: "prepwise-c9d6e.firebasestorage.app",
  messagingSenderId: "118708595137",
  appId: "1:118708595137:web:24c348244d4546033e6740",
  measurementId: "G-ZGM7RQ9FQT",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
