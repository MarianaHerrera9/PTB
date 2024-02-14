import React from "react";
import './header.css'

function Header () {
    return (
        <div>
        <nav className="nav">
            <a href="#" className="title">DEMO Streaming</a>
            <ul className="menu">
                <li className="login">
                    <a href="#" className="nav__link">Log in</a>
                </li>
                <li className="start">
                    <a href="#" className="nav__link">Start your free trial</a>
                </li>
            </ul>
        </nav>
        </div>
    );
}

export default Header; 
