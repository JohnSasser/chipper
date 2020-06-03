import React, { useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import NavBar from "../../components/NavBar";
import ViewAllPosts from "../../components/ViewAllPosts";

const FeedPage = props => {
  
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div>
      <NavBar />
      <div className="container bodycontent">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <ViewAllPosts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedPage;
