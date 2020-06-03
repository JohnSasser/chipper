import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import CreatePost from "../../components/CreatePost";

const CreatePostPage = props => {
  // current user for the user check;
  const [setRedirect] = useState(false);

  // use effect for res.data === user from /authenticated to reroute home if user is not logged in ****
  useEffect(() => {
    axios.get("/authenticated").then((res) => {
      if (!res.data) setRedirect(true);
    });
  }, [setRedirect]);
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-12 userInformation">
            <CreatePost history={props.history} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePostPage;
