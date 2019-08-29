import React from "react";
import NavBar from "./navbar/navbar";
import TxtIndex from './txt/txtIndex';

function page2() {
    return (
        <div style={{ background: "teal", height: "100vh" }}>
            <NavBar />
            <TxtIndex />
        </div>
    )
}

export default page2;
