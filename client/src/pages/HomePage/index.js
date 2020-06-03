import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import UserInformation from "../../components/UserInformation";

import "./style.css";

const HomePage = props => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container bodycontent">
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