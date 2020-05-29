import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../Context/AuthContext';
import Message from '../Message';
// import img from "../images/chipper/pets.png"

const UserInformation = props => {
  const { user } = useContext(AuthContext);

  // use effect for res.data === user from /authenticated to reroute home if user is not logged in ****
  // useEffect(() => {


  // }, []);

  return (
    <div className="userInformation">
      {/* <img src={img} alt="line-of-pets"/> */}
      <h2 id="center-h1">Owner Information:</h2>
      <hr className="hr-row" />
      <br />
      <div className="card card-background">
        <div className="card-body">
          <br />
          <h3 className="card-text">User Name:{user.username}</h3>
          <br />
          <h3 className="card-text">Email Address:{user.email}</h3>
          <br />
          <h3 className="card-text">Phone Number:{user.phone}</h3>
          <br />
          <h3 className="card-text">Address:</h3>
          {user.street}
          <br />
          {user.city}
          <br />
          {user.state}
          <br />
          {user.zip}
          <br />

          <Link className="navlink btn btn-warning" to="/userUpdate">
            Update Information
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
