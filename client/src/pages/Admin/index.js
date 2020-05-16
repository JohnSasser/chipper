import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../components/CurrentUserContext";
import AdminPetInformation from "../../components/AdminPetInformation";
import axios from "axios";
import { Redirect } from "react-router-dom";
import chip from "../../images/chipper/chipperOne.png";
import "./style.css";

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
    pupPicture: ""
  });

  const onSubmit = (e) => {
    const searchTerm = search;
    axios
      .post("/api/search", {
        microNum: searchTerm,
      })
      .then((returnedSearch) => {
        console.log(returnedSearch);
        if (returnedSearch.data) {
          setPet({
            petName: returnedSearch.data.pet.petName,
            microNum: returnedSearch.data.pet.microNum,
            pupPicture: returnedSearch.data.pet.petImageURL,
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
      <div className="justify-content-center">
        <div className="admin-container">
          <img src={chip} alt="logo" className="center"></img>
          <br />
          <input
            name="search"
            className=""
            type="input"
            value={search}
            onChange={onChange}
          ></input>
          <br />
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
        </button>
          <br />
          <br />

          <AdminPetInformation
            petName={pet.petName}
            microNum={pet.microNum}
            pupImage={pet.pupPicture}
          ></AdminPetInformation>
        </div>
      </div>
    );
}

export default Admin;
