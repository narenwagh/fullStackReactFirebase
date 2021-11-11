import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAa-zBEX8hBuWLJuNv5m2T3Uyba8LElxJE",
  authDomain: "readinglist-212de.firebaseapp.com",
  projectId: "readinglist-212de",
  storageBucket: "readinglist-212de.appspot.com",
  messagingSenderId: "996587206889",
  appId: "1:996587206889:web:ba3181ebd819645fdc9878",
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
