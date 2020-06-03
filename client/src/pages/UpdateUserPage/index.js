import React, { useEffect } from 'react';
import NavBar from "../../components/NavBar";
import Update from "../../components/Update";

const UpdateUserPage = props => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container bodycontent">
        <div className="row">
          <div className="col-10 userInformation">
            <Update history={props.history} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUserPage;
