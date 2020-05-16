import React from "react";
import chip from "../../images/chipper/chipper2.png"

function AdminPetInformation(props) {
  return (
    <div>
      <div className="row">
        <div className="card" style={{ width: 18 + "rem" }}>
          <img
            src={chip}
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">{props.petName}</h5>
            <p className="card-text">Microchip Number: {props.microNum}</p>
            <button className="btn btn-primary">
              Possible Link to Records
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPetInformation;
