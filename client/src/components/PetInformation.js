import React from "react";

function PetInformation() {
    return (
        <div className="row">
            <div className="card" style={{width: 18 + 'rem'}}>
                <img src="http://place-puppy.com/100x100" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Your pet name here</h5>
                    <p className="card-text">Microchip Number: (microchip number here)</p>
                    <a href="#" className="btn btn-primary">Possible Link to Records</a>
                </div>
            </div>
            <div className="card" style={{width: 18 + 'rem'}}>
                <img src="http://place-puppy.com/100x101" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Snuggles</h5>
                    <p className="card-text">Microchip Number: 4581215123</p>
                    <a href="#" className="btn btn-primary">Records</a>
                </div>
            </div>
        </div>
    )
}

export default PetInformation;