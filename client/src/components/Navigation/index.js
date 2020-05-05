import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';



function Navigation() {
    
    return <nav className="navbar navbar-expand-lg navbar-dark shadow-lg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto links">
                <li className="nav-item active">
                    <Link smooth className="nav-link" to="/#home">Home </Link>
                </li>
                <li className="nav-item">
                    <Link smooth className="nav-link" to="/userProfile">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link smooth className="nav-link" to="/userPetsProfile">Pet Profile</Link>
                </li>
                <li className="nav-item">
                    <Link smooth className="nav-link" to="/adminPage">Admin Page</Link>
                </li>
                <li className="nav-item">
                    <Link smooth className="nav-link" to="/SignUp">SignUp</Link>
                </li>
            </ul>
        </div>
    </nav>

}

export default Navigation;
