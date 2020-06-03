import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const UserInformation = (props) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="userInformation">
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
};

export default UserInformation;
