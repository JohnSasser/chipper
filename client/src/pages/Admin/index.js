import React, { useState, useEffect } from "react";
import AdminPetInformation from "../../components/AdminPetInformation";
import AdminUserInformation from "../../components/AdminUserInformation";
import axios from "axios";
import { Redirect } from "react-router-dom";
import chip from "../../images/chipper/chipperOne.png";
import "./style.css";

function Admin() {
  // set redirect for home route ****
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
        // console.log(returnedSearch);
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

  return (
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
        <AdminUserInformation />
      </div>
    </div>
  );
}

export default Admin;
