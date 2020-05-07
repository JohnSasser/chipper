import React from "react";
import { Link } from "react-router-dom";

function UserDirectory() {


    const Logout = function () {
        // Logout functionallity goes here maybe to be used to logout user if 
        // passport doesnt do it already.
    }
    
    return (
        <div className="directory">
            <ul className="list-group">
                <li className="list-group-item active"><img src="https://www.placecage.com/100/100"></img></li>
                <Link className="nav-link" to="/userFeed">Feed</Link>
                <Link className="nav-link" to="/userProfile">Profile</Link>
                <Link className="nav-link" to="/userPetsProfile">Pet Profile</Link>
                <Link className="nav-link" to="/userUpdate">Update Profile</Link>
                <Link className="nav-link" to="/">Logout</Link>
            </ul>
        </div>
    )
}

export default UserDirectory;