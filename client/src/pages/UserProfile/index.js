import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../../components/CurrentUserContext";
import axios from "axios";
import UserDirectory from "../../components/UserDirectory";
import UserInformation from "../../components/UserInformation";

import "./UserProfile.css";

function UserProfile() {
  // current user for the user check;
  const { currentUser, setCurrentUser } = useContext(UserContext);

  // set redirect for home route ****
  const [redirect, setRedirect] = useState(false);

  // use effect for res.data === user from /api/authenticate to reroute home if user is not logged in ****
  useEffect(() => {
    console.log("current user Update.index.js", currentUser);
    axios.get("/api/authenticate").then((res) => {
      if (!res.data) setRedirect(true);
      console.log(res);
    });
  }, []);

  return redirect ? (
    <Redirect to="/login" />
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <UserDirectory />
        </div>
        <div className="col-10 userInformation">
          <UserInformation />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
