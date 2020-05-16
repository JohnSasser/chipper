import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../../components/CurrentUserContext";
import axios from "axios";
import UserDirectory from "../../components/UserDirectory";
import PetInformation from "../../components/PetInformation";
import AddPet from "../../components/AddPet";

function UserPetsProfile() {
  // current user for the user check;
  const { currentUser, setCurrentUser } = useContext(UserContext);

  // set redirect for home route ****
  const [redirect, setRedirect] = useState(false);

  // use effect for res.data === user from /api/authenticate to reroute home if user is not logged in ****
  useEffect(() => {
    console.log("current user Update.index.js", currentUser);
    axios.get("/api/authenticate").then((res) => {
      if (!res.data) setRedirect(true);
      console.log(res);
    });
  }, []);

  return redirect ? (
    <Redirect to="/login" />
  ) : (
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
