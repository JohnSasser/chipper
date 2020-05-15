import React from "react";
import { Link } from "react-router-dom";
import chip from "../../images/chipper/chipperOne.png";
import "./style.css";

function UserDirectory() {
  return (
    <div className="main-directory">
      <ul className="list-group directory">
        <img className="img" alt="chipper logo" src={chip} width="150px"></img>
        <div id="box">
          <Link className="nav-link rounded-pill" to="/userFeed">
            Feed
          </Link>
          <Link className="nav-link rounded-pill" to="/home">
            Profile
          </Link>
          <Link className="nav-link rounded-pill" to="/userPetsProfile">
            Pet Profile
          </Link>
          <Link className="nav-link rounded-pill" to="/">
            Logout
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default UserDirectory;
