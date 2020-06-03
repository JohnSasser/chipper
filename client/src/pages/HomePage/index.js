import React from "./node_modules/react";
import NavBar from "../../components/NavBar";
import UserInformation from "../../components/UserInformation";

import "./UserProfile.css";

const UserProfile = props => {
  
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-12 userInformation">
            <UserInformation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;