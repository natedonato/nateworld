import React from "react";
import NavBar from './navbar/navbar';
import './reset.css';

function root () {
    return(
    <>
        <NavBar />
        <div className="app">
            Hey welcome to the index page!
            Theres not much here...
        </div>
    </>
    )
}

export default root;
