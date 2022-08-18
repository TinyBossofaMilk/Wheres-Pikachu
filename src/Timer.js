import React from "react";
import { render } from "@testing-library/react";

const Timer = (props) => {
    const {start} = props;
    let now = new Date();;
    setInterval(() => {
        now = new Date();
        // console.log("now")
        // console.log(now)
    }, 1000)
    let min = 0;
    let sec = 0;
    let msec = 0;
    // console.log(start)
    if(start){
        min = now.getMinutes() - start.getMinutes();
        sec = now.getSeconds() - start.getSeconds();
        if(sec < 0){
            min -= 1;
            sec += 60
        }
        msec = now.getMilliseconds() - start.getMilliseconds();
        if(msec < 0){
            sec -= 1
            msec += 1000;
        }
    }

    return (
        <div>Timer {min}:{sec}:{msec}</div>
    );
};

export default Timer;
