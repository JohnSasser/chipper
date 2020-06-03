import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { AuthContext } from '../../Context/AuthContext';
import { AutoScaling } from "aws-sdk";

const PetInformation = props => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div className="row">
      {user.pets.map((pet, index) => {
        return (
          <div key={index} className="row card" style={{ margin: "0 auto", marginBottom: "40px", width: 18 + "rem" }}>
            <div className="card-body">
              <img
                src={pet.petImageURL || "/no_pet_image.png"}
                style={{
                  height: 6 + "rem",
                  marginBottom: 20 + "px",
                  marginLeft: 2 + "rem",
                  border: "solid black" + 5 + "px",
                }}
                alt="..."
              ></img>
              <h5 className="pet-name">{pet.petName}</h5>
              <p className="card-text">Microchip Number: {pet.microNum}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PetInformation;
