import React, { Component } from "react";
import Axios from "axios";

class PetInformation extends Component {
  state = {
    pets: [],
  };

  componentDidMount() {
    Axios.get("/api/pets")
      .then((res) => {
        this.setState({ pets: res.data });
        console.log(this.state.pets);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="row">
        {this.state.pets.map((pet, index) => {
          return (
            <div key={index} className="card" style={{ width: 18 + "rem" }}>
              <img
                src="https://placedog.net/70/40"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">{pet.petName}</h5>
                <p className="card-text">Microchip Number: {pet.microNum}</p>
                <a href="#" className="btn btn-primary">
                  Possible Link to Records
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PetInformation;
