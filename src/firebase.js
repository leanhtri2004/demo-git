import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCsZ2qOYcRS9EZPAfBAc2JF5xfmOj9Lwgs",
    authDomain: "duancanhanorganic.firebaseapp.com",
    databaseURL: "https://duancanhanorganic-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "duancanhanorganic",
    storageBucket: "duancanhanorganic.firebasestorage.app",
    messagingSenderId: "495029686522",
    appId: "1:495029686522:web:7b53cc6bb0f74a21e8b943",
    measurementId: "G-84MV47BYJD"
  };
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app);
  export { app,db, addDoc, getDocs, deleteDoc, doc, auth }