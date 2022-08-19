import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import Interface from "./Interface";
import Timer from "./Timer";
import styles from "./styles.css"

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
  const [gameInProgress, setGameInProgress] = useState(false);
  const [time, setTime] = useState(0); // 1000 = 1 second
  const [gameOver, setGameOver] = useState(false);

  const gameStart = (e) => {
    setGameInProgress(true);
  };

  const gameFinish = (e) => {
      setGameOver(true);
  };

  const reset = () => {
    setGameInProgress(false);
    setGameOver(false);
    setTime(0);
  }

  useEffect(() => {
    let interval = null;
    if(gameOver)
      clearInterval(interval);
    else if(gameInProgress)
      {interval = setInterval(() => {setTime(time + 10)}, 10);}


    return () => {clearInterval(interval)}
  }, [gameStart, gameFinish, time])

  return (
    <div id="app">
      {gameInProgress ? 
        <Interface image={image} map={map} gameFinish={gameFinish} /> 
        : <button onClick={gameStart}>Start</button>}

      <div id="sidebar">
        <Timer time={time}/>
        {gameOver ? <button onClick={reset}>Retry?</button> : null}
      </div>
    </div>
  );
}

export default App;