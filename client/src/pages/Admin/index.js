import React, { useState }from "react";
import AdminPetInformation from "../../components/AdminPetInformation"
import axios from "axios"; 

function Admin (){
    const [search, setSearch] = useState("")

    const [pet, setPet] = useState({
        petName: "",
        microNum: ""
    })

    const onSubmit = (e) => {
        const searchterm = search
        axios.post('/api/search', {
            petName: searchterm
        }).then((returnedSearch) => {
            if (returnedSearch.data) {
              setPet({
                  petName: returnedSearch.data.petName, 
                  microNum: returnedSearch.data.microNum
                })
            }
          })
          .catch((err) => {
            if (err) console.log(`petsearch server error ${err}`);
          });

    }

    const onChange = (e) => {
        setSearch(e.target.value)
      };

     
    return (
        <div class="container">
            <input name="search" id="" class="" type="input" value={search} on onChange={onChange}></input>
            <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
            <AdminPetInformation 
            petName={pet.petName}  
            microNum={pet.microNum}
            ></AdminPetInformation>
        </div>
    )
}

export default Admin;