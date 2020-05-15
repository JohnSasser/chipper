import React from "react";
import UserDirectory from "../../components/UserDirectory"
import Update from "../../components/Update"

function UserUpdate() {
    return (
        <div>
                    <UserDirectory />
                    <div className="container">
                    <div className="row">
                <div className="col-12 userInformation">
                    <Update/>
                </div>
                </div>
           
           </div>
        </div>
        
    )
}

export default UserUpdate;