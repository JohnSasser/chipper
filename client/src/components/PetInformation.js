import React from "react";

function PetInformation() {
    return (
        <div className="row">
            <div class="card" style={{width: 18 + 'rem'}}>
                <img src="http://place-puppy.com/100x100" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Your pet name here</h5>
                    <p class="card-text">Microchip Number: (microchip number here)</p>
                    <a href="#" class="btn btn-primary">Possible Link to Records</a>
                </div>
            </div>
            <div class="card" style={{width: 18 + 'rem'}}>
                <img src="http://place-puppy.com/100x101" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Snuggles</h5>
                    <p class="card-text">Microchip Number: 4581215123</p>
                    <a href="#" class="btn btn-primary">Records</a>
                </div>
            </div>
        </div>
    )
}

export default PetInformation;