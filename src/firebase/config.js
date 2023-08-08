import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCdeRSWeGBJFLNKrzVvvLytyAr_67MG0mA",
  authDomain: "petparadise-d948c.firebaseapp.com",
  projectId: "petparadise-d948c",
  storageBucket: "petparadise-d948c.appspot.com",
  messagingSenderId: "77767794371",
  appId: "1:77767794371:web:937c91273661ff43388c76"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);