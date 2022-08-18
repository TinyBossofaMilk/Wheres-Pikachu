import React from "react";
import { render } from "@testing-library/react";

const Timer = (props) => {
    const {time} = props;
    console.log(time);
    // let now = new Date();;
    let min = 0;
    let sec = 0;
    let msec = 0;

    // function calculateTime () {
        
    //     if(start){
    //         min = now.getMinutes() - start.getMinutes();
    //         sec = now.getSeconds() - start.getSeconds();
    //         if(sec < 0){
    //             min -= 1;
    //             sec += 60
    //         }
    //         msec = now.getMilliseconds() - start.getMilliseconds();
    //         if(msec < 0){
    //             sec -= 1
    //             msec += 1000;
    //         }
    //     }
    // };

    // calculateTime();

    return (
        <div>Timer {Math.floor(time / 60000)}:{time/1000 % 60 }:{time%1000}</div>
        // <div>{time}</div>
    );
};

export default Timer;
