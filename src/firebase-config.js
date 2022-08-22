/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4tf-yYxtqnRfo72mxqlVK1-f7aRD6weg",
  authDomain: "wheres-pikachu-f0cf0.firebaseapp.com",
  projectId: "wheres-pikachu-f0cf0",
  storageBucket: "wheres-pikachu-f0cf0.appspot.com",
  messagingSenderId: "145309171259",
  appId: "1:145309171259:web:0ae21b8b077aadd26da61e",
  measurementId: "G-FDPDYKH7WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const config = {
  apiKey: "AIzaSyD4tf-yYxtqnRfo72mxqlVK1-f7aRD6weg",
  authDomain: "wheres-pikachu-f0cf0.firebaseapp.com",
  projectId: "wheres-pikachu-f0cf0",
  storageBucket: "wheres-pikachu-f0cf0.appspot.com",
  messagingSenderId: "145309171259",
  appId: "1:145309171259:web:0ae21b8b077aadd26da61e",
  measurementId: "G-FDPDYKH7WP"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}