import React from 'react';
import NavBar from "../../components/NavBar";
import Update from "../../components/Update";

const UserUpdate = props => {
  // set redirect for home route ****
  // console.log('userupdate props: ', props);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-10 userInformation">
            <Update history={props.history} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserUpdate;
