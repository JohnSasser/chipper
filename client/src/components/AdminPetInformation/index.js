import React from "react";
import "./style.css"

const AdminPetInformation = props => {
  return props.microNum ? (
    <div className="card owner-card">
      <img
        src={props.pupImage || "/no_pet_image.png"}
        className="card-img-top background-img"
        alt=""
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.petName}</h5>
        <p className="card-text">Microchip Number: {props.microNum}</p>
        <button className="btn btn-primary">Possible Link to Records</button>
      </div>
    </div>
  ) : null;
}

export default AdminPetInformation;
