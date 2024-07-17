import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-ui-4acd1.firebaseapp.com",
  projectId: "admin-ui-4acd1",
  storageBucket: "admin-ui-4acd1.appspot.com",
  messagingSenderId: "26972915248",
  appId: "1:26972915248:web:1cbeb035c2f233ad9f4ff5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage (app);
