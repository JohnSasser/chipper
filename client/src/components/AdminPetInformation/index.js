import React from "react";

function AdminPetInformation(props) {
  return (
    <div>
      <div className="row">
        <div className="card" style={{ width: 18 + "rem" }}>
          <img
            src="https://placedog.net/70/40"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">{props.petName}</h5>
            <p className="card-text">Microchip Number: {props.microNum}</p>
            <a href="#" className="btn btn-primary">
              Possible Link to Records
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPetInformation;
