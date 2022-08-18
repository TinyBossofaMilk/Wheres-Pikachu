import { render } from "@testing-library/react";
import React, { useState } from "react";
import { initializeApp } from 'firebase/app';
import Interface from "./Interface";
import Timer from "./Timer";

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
  const image = require("./findpikachu.jpg") ;
  const map = "pikamap";
  const [showScreen, setShowScreen] = useState(false);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [gameOver, setGameOver] = useState(false);

  const gameStart = (e) => {
    setShowScreen(true);
    const gamescreen = document.getElementById("interface");
    setStart(new Date());
    console.log("gameStart =")
    console.log(start)
    console.log("gameEnd =")
    console.log(end)
  };

  const gameFinish = (e) => {
    if(!gameOver){
      setEnd(new Date());
      setGameOver(true);
    }
    console.log("gameStart =")
    console.log(start)
    console.log("gameEnd =")
    console.log(end)
  };

  const reset = () => {
    setStart(undefined);
    setShowScreen(false);
    setGameOver(false);
  }

  return (
    <div>
      <Timer start={start}/>
      {showScreen ? 
        
        <Interface image={image} map={map} gameFinish={gameFinish} /> 
        
        : <button onClick={gameStart}>Start</button>}

      {gameOver ? <button onClick={reset}>Retry?</button> : null}
    </div>
  );
}

export default App;
