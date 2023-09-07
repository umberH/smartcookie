// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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
  appId: "1:856268926028:web:ab813f3da0fd2e37efd8e9",
  measurementId: "G-R06VT7KTEH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// // Get a list of customers from your database
// async function customers(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }