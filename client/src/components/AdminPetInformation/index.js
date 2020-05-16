import React from "react";
import "./style.css"

function AdminPetInformation(props) {
  return (
    
    <div className="card owner-card">
      <img
        src={props.pupImage}
        className="card-img-top background-img"
        alt="dog image"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.petName}</h5>
        <p className="card-text">Microchip Number: {props.microNum}</p>
        <button className="btn btn-primary">Possible Link to Records</button>
      </div>
    </div>
  );
}

export default AdminPetInformation;
