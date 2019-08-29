import React from "react";
import NavBar from "./navbar/navbar";
import TxtIndex from './txt/txtIndex';

function txtPage() {
    return (
        <div style={{ background: "teal", height: "100%" }}>
            <NavBar />
            <TxtIndex />
        </div>
    )
}

export default txtPage;
