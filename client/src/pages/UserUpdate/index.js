import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import UserDirectory from "../../components/UserDirectory";
import Update from "../../components/Update";

function UserUpdate() {
  // set redirect for home route ****
  const [redirect, setRedirect] = useState(false);

  // use effect for res.data === user from /api/authenticate to reroute home if user is not logged in ****
  useEffect(() => {
    axios.get("/api/authenticate").then((res) => {
      if (!res.data) setRedirect(true);
    });
  }, []);

  return redirect ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <UserDirectory />
      <div className="container">
        <div className="row">
        <div className="col-10 userInformation">
          <Update />
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default UserUpdate;
