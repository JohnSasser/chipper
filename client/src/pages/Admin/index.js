import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../components/CurrentUserContext";
import AdminPetInformation from "../../components/AdminPetInformation";
import axios from "axios";
import { Redirect } from "react-router-dom";

function Admin() {
  // current user for the user check;
  const { currentUser, setCurrentUser } = useContext(UserContext);

  // set redirect for home route ****
  const [redirect, setRedirect] = useState(false);

  // use effect for res.data === user from /api/authenticate ****
  useEffect(() => {
    console.log("current user Update.index.js", currentUser);
    axios.get("/api/authenticate").then((res) => {
      if (!res.data) setRedirect(true);
      console.log(res);
    });
  }, []);

  const [search, setSearch] = useState("");

  const [pet, setPet] = useState({
    petName: "",
    microNum: "",
  });

  const onSubmit = (e) => {
    const searchterm = search;
    axios
      .post("/api/search", {
        microNum: searchterm,
      })
      .then((returnedSearch) => {
        if (returnedSearch.data) {
          setPet({
            petName: returnedSearch.data.petName,
            microNum: returnedSearch.data.microNum,
          });
        }
      })
      .catch((err) => {
        if (err) console.log(`petsearch server error ${err}`);
      });
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return redirect ? (
    <Redirect to="/login" />
  ) : (
    <div className="container">
      <input
        name="search"
        className=""
        type="input"
        value={search}
        onChange={onChange}
      ></input>
      <button type="submit" className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
      <AdminPetInformation
        petName={pet.petName}
        microNum={pet.microNum}
      ></AdminPetInformation>
    </div>
  );
}

export default Admin;
