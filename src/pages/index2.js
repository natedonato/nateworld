import React from "react";
import NavBar from './navbar/navbar';
import Animation from './animatedlogo/animation';
import './reset.css';

function root () {
    return(
        <div style={{ height: "100%", display: "flex", flexFlow: "column"}}>
            <NavBar style={{ background: "transparent", color: "white", position: 'absolute', borderColor: 'white'}}/>
        {/* <div className="app"> */}
            <Animation />
        {/* </div> */}
    </div>
    )
}

export default root;
