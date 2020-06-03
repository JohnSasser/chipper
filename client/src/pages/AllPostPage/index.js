import React, { useContext } from "react";
import { AuthContext } from '../../Context/AuthContext';
import UserDirectory from "../../components/NavBar";
import ViewAllPosts from "../../components/ViewAllPosts"

function AllPosts() {
  // current user for the user check;
  const { user } = useContext(AuthContext);

  return (
    <div>
      <UserDirectory />
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <ViewAllPosts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllPosts;
