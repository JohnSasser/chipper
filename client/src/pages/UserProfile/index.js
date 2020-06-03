import React from "react";
import NavBar from "../../components/NavBar";
import UserInformation from "../../components/UserInformation";

import "./HomePage.css";

const HomePage = props => {
  // console.log('HomePage props: ', props);
  
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