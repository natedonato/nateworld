import React from "react";
import NavBar from './navbar/navbar';
import './reset.css';
import Splash from './splashcontent/splash';

function root () {
    return(
        <div style={{ height: "100%", display: "flex", flexFlow: "column"}}>
            <NavBar style={{ background: "transparent", color: "white", position: 'absolute', borderColor: 'white'}}/>
        <div className="app">
            <Splash />
        </div>
    </div>
    )
}

export default root;
