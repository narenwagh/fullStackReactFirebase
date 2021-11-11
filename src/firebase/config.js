import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDbJLW6z4GuqoK597WODYXtanBi8SXpP8",
  authDomain: "fsrf-b888c.firebaseapp.com",
  projectId: "fsrf-b888c",
  storageBucket: "fsrf-b888c.appspot.com",
  messagingSenderId: "238655698200",
  appId: "1:238655698200:web:b7cecb18f9162be253da6d",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
// old "projectFirestore in firebasev8"
const db = getFirestore();

// init firebase auth
// old "projectAuth in firebasev8"
const auth = getAuth();

export { db, auth };
