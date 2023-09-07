// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
 
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGD6_h1uvdEb4QdsNo1ZtKVS8eMHSTpXk",
  authDomain: "smartcookieappointments.firebaseapp.com",
  databaseURL: "https://smartcookieappointments-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smartcookieappointments",
  storageBucket: "smartcookieappointments.appspot.com",
  messagingSenderId: "856268926028",
  appId: "1:856268926028:web:3b62c75cd19e3348efd8e9",
  measurementId: "G-LSJ4YH7DRW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// // Get a list of customers from your database
// async function customers(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }