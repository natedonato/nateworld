import React from "react";
import NavBar from "./navbar/navbar";
import Portrait from './portrait/portrait';

export default ()=>{
    return (
        <div style={{ height: "100%", display: "flex", flexFlow: "column" }}>
            <NavBar  />
            <div className="portraitBG">
                <Portrait />
            </div>
        </div>
    )
}
