import React from "react";
import UserDirectory from "../../components/UserDirectory"
import PetInformation from "../../components/PetInformation"
import AddPet from "../../components/AddPet"


function UserPetsProfile() {
    return (
        <div>
                <UserDirectory />
                <div className="container">
                <div className="row">
                <div className="col-12 userInformation">
                    <PetInformation />
                    <AddPet></AddPet>
                </div>
                </div>
        </div>
        </div>
    )
}

export default UserPetsProfile;