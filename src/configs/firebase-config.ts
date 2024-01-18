//@ts-nocheck
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_RETRO_APIKEY,
  authDomain: import.meta.env.VITE_URL,
  projectId: "retro-ecommerce-7df8d",
  storageBucket: "retro-ecommerce-7df8d.appspot.com",
  messagingSenderId: "710915029167",
  appId: "1:710915029167:web:9e481cd06ef2d4a9603c5a",
  measurementId: "G-PBNFHB4MEJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
