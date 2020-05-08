import React from "react";
import axios from "axios";
import { useState } from  "react"


function AddPet() {

    const [petName, setPetName] = useState("")
    const [petMicrochipNumber, setPetMicrochipNumber] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/add", {
            petName: petName,
            microNum: petMicrochipNumber,
            species: "dog"
        }).then((res) => {
            console.log(res);
            if (res.data) {
              console.log(`pet added successfully`);
            }
          })
          .catch((err) => {
            if (err) console.log(`Addpet server error ${err}`);
          });
    }

    const onChange = (e) => {
        console.log(e.target, e.target.name, e.target.value);
        if (e.target.name === "petName"){
            setPetName(e.target.value)
        } else if (e.target.name === "petMicrochipNumber") {
            setPetMicrochipNumber(e.target.value)
        }
        
      };


    return (
        <div>
            <form>
                <div class="form-group">
                    <label>New Pet Name</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    name="petName"
                    value={petName}
                    onChange={onChange}
                    placeholder="Pet Name Here"></input>
                </div>
                <div class="form-group">
                    <label>New pets microchip number</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    name="petMicrochipNumber"
                    value={petMicrochipNumber}
                    onChange={onChange}
                    placeholder="55555555555"></input>
                </div>
                <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>

        </div>
    )
}

export default AddPet;
