
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB__Izx7WiUigPexa0Y-yFac6lHK5uWNlM",
  authDomain: "shop-bae13.firebaseapp.com",
  projectId: "shop-bae13",
  storageBucket: "shop-bae13.appspot.com",
  messagingSenderId: "859676025564",
  appId: "1:859676025564:web:0de9f9bb9671fd06698a19"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export { db };