import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from '../../Context/AuthContext';
import axios from "axios";
import UserDirectory from "../../components/UserDirectory";
import ViewAllPosts from "../../components/ViewAllPosts"
import Search from "../../components/SearchBar"

function AllPosts() {
  // current user for the user check;
  const { user } = useContext(AuthContext);

  // use effect for res.data === user from /authenticated to reroute home if user is not logged in ****
  // useEffect(() => {

  // }, []);

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
