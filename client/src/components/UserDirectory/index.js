import React from "react";
import { Link } from "react-router-dom";
import chip from "../../images/chipper/chipperOne.png";
import "./style.css";

function UserDirectory() {

  return ( 
    <div className="jumbotron jumbotron-fluid head">
        <img className="img" alt="chipper logo" src={chip} width="150px"></img>
        <div id="nav" className="space">
          <Link className="nav-item space" to="/home">
          <button type="button" className="btn btn-dark btn-lg">Home</button>
          </Link>
          <Link className="nav-item space" to="/userFeed">
          <button type="button"  className="btn btn-dark btn-lg">Feed</button>
          </Link>
          <Link className="nav-item space" to="/userPetsProfile">
          <button type="button" className="btn btn-dark btn-lg">Pets</button>
          </Link>
          <Link className="nav-item space" to="/">
          <button type="button" className="btn btn-outline-dark btn-lg">Logout</button>
          </Link>
        </div>
        </div>
    
  );
}

export default UserDirectory;
