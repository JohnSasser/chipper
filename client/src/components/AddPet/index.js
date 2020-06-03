import React, { useContext, useState } from 'react';
import axios from "axios";
import "./style.css";
import AwsUploadImage from '../AwsUploadImage';
import AwsUploadContext from '../AwsUploadContext';
import { AuthContext } from '../../Context/AuthContext';

const AddPet = props => {
  const [petName, setPetName] = useState("");
  const [petMicrochipNumber, setPetMicrochipNumber] = useState("");
  const { fileState } = useContext(AwsUploadContext);
  const { user, setUser } = useContext(AuthContext);

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/add", {
        petName: petName,
        microNum: petMicrochipNumber,
        species: "dog",
        petImageURL: fileState.recentImageURL
      })
      .then((res) => {
        let pet = res.data;
        console.log('data back from /api/add: ', pet);
        console.log('pets inside thsi thing: ', user.pets);
        if (pet) {
          let newPets = user.pets;
          newPets.push(pet)
          setUser({
            ...user,
            pets: newPets
          });
          // console.log(`pet added successfully`);
        }
      })
      .catch((err) => {
        if (err) console.log(`Addpet server error ${err}`);
      });
  };

  const onChange = (e) => {
    // console.log(e.target, e.target.name, e.target.value);
    if (e.target.name === "petName") {
      setPetName(e.target.value);
    } else if (e.target.name === "petMicrochipNumber") {
      setPetMicrochipNumber(e.target.value);
    }
  };

  return (
    <div className="container top">
      <h2 className="text">Adding to the family?</h2>
      <br />
      <p className="p-text">Simply add your pets information below</p>
      <hr className="row-border" />
      <br />
      <form>
        <div className="form-group">
          <label>New Pet Name</label>
          <input
            type="text"
            className="form-control"
            name="petName"
            value={petName}
            onChange={onChange}
            placeholder="Pet Name Here"
          ></input>
        </div>
        <div className="form-group">
          <label>New pets microchip number</label>
          <input
            type="text"
            className="form-control"
            name="petMicrochipNumber"
            value={petMicrochipNumber}
            onChange={onChange}
            placeholder="55555555555"
          ></input>
        </div>
        <AwsUploadImage />
        <div>
          <button type="submit" className="btn btn-warning submit-btn" onClick={onSubmit}>
            Submit
        </button>
        </div>
      </form>
    </div>
  );
}

export default AddPet;
