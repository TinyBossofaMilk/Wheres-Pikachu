import React from "react";
import { render } from "@testing-library/react";

const Timer = (props) => {
    const {time} = props;

    return (
        <div id="timer">Timer {Math.floor(time / 60000)}:{Math.floor(time/1000 % 60)}:{time%1000}</div>
    );
};

export default Timer;
