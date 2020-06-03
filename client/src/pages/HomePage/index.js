import React from "react";
import NavBar from "../../components/NavBar";
import UserInformation from "../../components/UserInformation";

import "./style.css";

const HomePage = props => {
  
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

export default HomePage;