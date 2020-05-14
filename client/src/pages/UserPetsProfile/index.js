import React from "react";
import UserDirectory from "../../components/UserDirectory"
import PetInformation from "../../components/PetInformation"
import AddPet from "../../components/AddPet"


function UserPetsProfile() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <UserDirectory />
                </div>
                <div className="col-10 userInformation">
                    <PetInformation />
                    <AddPet></AddPet>
                </div>
            </div>
        </div>
    )
}

export default UserPetsProfile;