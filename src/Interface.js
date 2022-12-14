import { render } from "@testing-library/react";
import React from "react";

const Interface = (props) => {
    const {image, map, gameFinish} = props;

    return (
        <div id="interface" >
            <img src={image} useMap={`#${map}`}></img>
            <map name={map}>
                {/* <area shape="circle" coords=""/> */}
                <area shape="rect" coords="74, 951, 106, 998" onClick={gameFinish} />
            </map>
        </div>
    );
}

export default Interface;