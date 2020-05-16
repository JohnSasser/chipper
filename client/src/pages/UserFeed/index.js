import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../../components/CurrentUserContext";
import axios from "axios";
import UserDirectory from "../../components/UserDirectory";
import Feed from "../../components/CreatePost";
import CreatePost from "../../components/CreatePost";
import ViewAllPosts from "../../components/ViewAllPosts"

function UserFeed() {
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
        <UserDirectory />
        <div className="container">
            <div className="row">
                <div className="col-12 userInformation">
                    <CreatePost/>
                    <br/>
                    <ViewAllPosts/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default UserFeed;
