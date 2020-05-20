import React, { useContext, useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../CurrentUserContext";
// import img from "../images/chipper/pets.png"

function UserInformation() {
  // current user for the user check;
  const { currentUser } = useContext(UserContext);

  // set redirect for home route ****
  const [redirect, setRedirect] = useState(false);

  // use effect for res.data === user from /api/authenticate to reroute home if user is not logged in ****
  useEffect(() => {
    axios.get("/api/authenticate").then((res) => {
      if (!res.data) setRedirect(true);
      console.log(res);
      // UserInformation.forceUpdate();
    });
  }, []);

  return redirect ? (
    <Redirect to="/login" />
  ) : (
      <div className="userInformation">
        {/* <img src={img} alt="line-of-pets"/> */}
        <h2 id="center-h1">Owner Information:</h2>
        <hr className="hr-row" />
        <br />
        <div className="card card-background">
          <div className="card-body">
            <br />
            <h3 className="card-text">User Name:{currentUser.username}</h3>
            <br />
            <h3 className="card-text">Email Address:{currentUser.email}</h3>
            <br />
            <h3 className="card-text">Phone Number:{currentUser.phone}</h3>
            <br />
            <h3 className="card-text">Address:</h3>
            {currentUser.street}
            <br />
            {currentUser.city}
            <br />
            {currentUser.state}
            <br />
            {currentUser.zip}
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
