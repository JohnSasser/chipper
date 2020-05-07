import React from "react";
import UserDirectory from "../../components/UserDirectory"
import Update from "../../components/Update"

function UserUpdate() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <UserDirectory />
                </div>
                <div className="col-10 userInformation">
                    <Update/>
                </div>
            </div>
        </div>
        
    )
}

export default UserUpdate;