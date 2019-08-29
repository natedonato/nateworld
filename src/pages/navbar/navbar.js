import React from "react";
import Link from "gatsby-link";
import './navbar.css';

function NavBar() {
    return (
        <div className="navBar"> 
            <Link to="/" className="colorBox">
                <div />
                Nate Donato
            </Link>
            <div>
                <Link to="/" activeClassName="activeLink" >Index</Link>
                <Link to="/txt" activeClassName="activeLink" >Txt</Link>
            </div>
        </div>
    )
}

export default NavBar;
