import React from "react";
import Link from "gatsby-link";
import './navbar.css';

function NavBar({style}) {
    return (
        <>
        <div className="navBar" style={style}> 
            <Link to="/" className="colorBox">
                <div />
                Nate Donato
            </Link>
            <div>
                <Link to="/" activeClassName="activeLink" >Index</Link>
                <Link to="/projects/" activeClassName="activeLink" >Web</Link>
                <Link to="/face/" activeClassName="activeLink" >Face</Link>
                <Link to="/gifs/" activeClassName="activeLink" >Gif</Link>
                <Link to="/txt/" activeClassName="activeLink" >Txt</Link>
            </div>
        </div>
        <div style={{"height": "40px"}}>

        </div>
        </>
    )
}

export default NavBar;
