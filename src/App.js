import { render } from "@testing-library/react";
import React from "react";
import Interface from "./Interface";
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4tf-yYxtqnRfo72mxqlVK1-f7aRD6weg",
  authDomain: "wheres-pikachu-f0cf0.firebaseapp.com",
  projectId: "wheres-pikachu-f0cf0",
  storageBucket: "wheres-pikachu-f0cf0.appspot.com",
  messagingSenderId: "145309171259",
  appId: "1:145309171259:web:0ae21b8b077aadd26da61e",
  measurementId: "G-FDPDYKH7WP"
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Interface />
  );
}

export default App;
