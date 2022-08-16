import { render } from "@testing-library/react";
import React from "react";
import findpikachu from "./screens/findpikachu"

const Interface = (props) => {
    const screen = findpikachu;

    const addOnClick = () => {

    };

    return (
        <div>
            <img src={screen}></img>
        </div>
    );
}

export default Interface;