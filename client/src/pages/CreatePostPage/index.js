import React, { useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import CreatePost from "../../components/CreatePost";

const CreatePostPage = props => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container bodycontent">
        <div className="row">
          <div className="col-12 userInformation">
            <CreatePost history={props.history} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
