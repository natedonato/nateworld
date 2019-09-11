import React from "react";
import NavBar from './navbar/navbar';
import './reset.css';
import Splash from './splashcontent/splash';

function root () {
    return(
        <>
        <div style={{ height: "100%", display: "flex", flexFlow: "column"}}>
            <NavBar style={{ background: "transparent", color: "white", position: 'absolute', borderColor: 'white'}}/>
        <div className="app">
            <Splash />
        </div>
    </div>
        <div>
            Hey I'm Nate Donato and this is my website.
            <br />
            Right now we've got Gifs, Txts, and the splash page.
                <br />
            In the future we will have an about, web projects, games, music, portraits, and more.
        </div>
    </>
    )
}

export default root;
