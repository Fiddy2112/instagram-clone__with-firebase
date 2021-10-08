import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCnUdXQ6x6AuDMetKziMdF1RCqEdrtgNoM",
  authDomain: "instagram-clone-21ffc.firebaseapp.com",
  projectId: "instagram-clone-21ffc",
  storageBucket: "instagram-clone-21ffc.appspot.com",
  messagingSenderId: "165783164174",
  appId: "1:165783164174:web:7349541891f5b1fd36735f",
  measurementId: "G-BLZ7ZN5N7E",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
