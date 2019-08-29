import React from "react";
import Link from "gatsby-link";
import './navbar.css';

function NavBar() {
    return (
        <div className="navBar"> 
            Nate Donato
            <span>
                <Link to="/">Index</Link>
                <Link to="/page2">Txt</Link>
            </span>
        </div>
    )
}

export default NavBar;
