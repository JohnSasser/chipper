import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import UserDirectory from "../../components/UserDirectory";
import PetInformation from "../../components/PetInformation";
import AddPet from "../../components/AddPet";

const UserPetsProfile = props => {

  return (
    <div>
      <UserDirectory />
      <div className="container">
        <div className="row pup-row">
          <div className="col-12 userInformation">
            <PetInformation />
            <AddPet></AddPet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPetsProfile;
