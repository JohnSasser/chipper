import React from 'react';
import NavBar from "../../components/NavBar";
import Update from "../../components/Update";

const UpdateUserPage = props => {
  // set redirect for home route ****
  // console.log('UpdateUserPage props: ', props);

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
