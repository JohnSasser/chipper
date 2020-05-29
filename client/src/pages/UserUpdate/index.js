import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import UserDirectory from "../../components/UserDirectory";
import Update from "../../components/Update";

const UserUpdate = props => {
  // set redirect for home route ****
  console.log('userupdate props: ', props);

  return (
    <div>
      <UserDirectory />
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
