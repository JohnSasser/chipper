import React from "react";
import NavBar from "../../components/NavBar";
import PetInformation from "../../components/PetInformation";
import AddPet from "../../components/AddPet";

const PetsPage = (props) => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row pup-row">
          <div className="col-12 userInformation">
            <PetInformation />
            <AddPet></AddPet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsPage;
