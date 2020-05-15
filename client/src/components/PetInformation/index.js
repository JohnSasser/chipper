import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import AwsUploadContext from '../AwsUploadContext';

function PetInformation() {

    const [state, setState] = useState({
        pets: []
    });

    const { fileState, setFileState } = useContext(AwsUploadContext);

    useEffect(() => {
        Axios.get('/api/pets')
            .then(res => {
                setState({ pets: res.data });
                console.log(state.pets);
            })
            .catch(err => console.log(err));
    }, []);

    let petImg = "";

    return (
        <div className="row">
            {
                state.pets.map((pet, index) => {

                    if (pet.petImageURL) {
                        petImg = pet.petImageURL;
                    } else {
                        petImg = "https://placedog.net/70/40";
                    }

                    return (
                        <div key={index} className="card" style={{ width: 18 + 'rem' }}>
                            <img src={petImg} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{pet.petName}</h5>
                                <p className="card-text">Microchip Number: {pet.microNum}</p>
                                <a href="#" className="btn btn-primary">Possible Link to Records</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PetInformation;
