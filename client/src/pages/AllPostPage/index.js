import React, { useContext } from "react";
import { AuthContext } from '../../Context/AuthContext';

import UserDirectory from "../../components/UserDirectory";
import ViewAllPosts from "../../components/ViewAllPosts"
import Search from "../../components/SearchBar"

function AllPosts() {
  // current user for the user check;
  const { user } = useContext(AuthContext);

  return (
    <div>
      <UserDirectory />
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <Search />
            <ViewAllPosts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllPosts;
