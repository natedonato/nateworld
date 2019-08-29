import React from "react";
import NavBar from './navbar/navbar';
import './reset.css';

function root () {
    return(
        <div style={{ height: "100%", display: "flex", flexFlow: "column"}}>
        <NavBar />
        <div className="app">
            Hey welcome to the index page!
            Theres not much here...
        </div>
    </div>
    )
}

export default root;
