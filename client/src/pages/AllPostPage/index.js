import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../components/CurrentUserContext";
import axios from "axios";
import UserDirectory from "../../components/UserDirectory";
import ViewAllPosts from "../../components/ViewAllPosts"
import Search from "../../components/SearchBar"

function AllPosts() {
  // current user for the user check;
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

   // use effect for res.data === user from /api/authenticate to reroute home if user is not logged in ****
  useEffect(() => {
    console.log("current user Update.index.js", currentUser);
    axios.get("/api/authenticate").then((res) => {
      if (!res.data) setRedirect(true);
      console.log(res);
    });
  }, []);
    return (
        <div>
        <UserDirectory/>
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12"> 
                <Search/>
                    <ViewAllPosts/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AllPosts;
