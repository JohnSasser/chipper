import React, { useContext } from "react";
import "./style.css";
import { Redirect, Link } from "react-router-dom";
import UserContext from "../CurrentUserContext";
// import img from "../images/chipper/pets.png"

function UserInformation() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="userInformation">
      {/* <img src={img} alt="line-of-pets"/> */}
      <h2 id="center-h1">Owner Information:</h2>
      <hr className="hr-row" />
      <br />
      <div className="card card-background">
        <div className="card-body">
          <br />
          <h3 className="card-text">Full Name:</h3>
          <p>{currentUser.username}</p>
          <h3 className="card-text"></h3>
          <p></p>
          <h3 className="card-text">Email Address:</h3>
          <p>{currentUser.email}</p>
          <h3 className="card-text">Phone Number:</h3>
          <p>{currentUser.phone}</p>
          <Link className="navlink btn btn-warning" to="/userUpdate">
            Update Information
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
