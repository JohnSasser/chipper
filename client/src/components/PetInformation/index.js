import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import AwsUploadContext from "../AwsUploadContext";

function PetInformation() {
  const [state, setState] = useState({
    pets: [],
  });

  const { fileState, setFileState } = useContext(AwsUploadContext);

  useEffect(() => {
    Axios.get("/api/pets")
      .then((res) => {
        setState({ pets: res.data });
        console.log(state.pets);
      })
      .catch((err) => console.log(err));
  }, []);

  let petImg = "";

  return (
    <div className="row">
      {state.pets.map((pet, index) => {
        if (pet.petImageURL) {
          petImg = pet.petImageURL;
        } else {
          petImg = "https://placedog.net/70/40";
        }

        return (
          <div key={index} className=" row card" style={{ width: 18 + "rem" }}>
            <div className="card-body">
              <img
                src={petImg}
                style={{
                  height: 6 + "rem",
                  marginBottom: 2 + "rem",
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
