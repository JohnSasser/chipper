import React from "react";
// import Navigation from "../../components/Navigation"
import UserDirectory from "../../components/UserDirectory"
import UserInformation from "../../components/UserInformation"

import "./UserProfile.css"

function UserProfile() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <UserDirectory/>
                </div>
                <div className="col-10 userInformation">
                    <UserInformation/>
                </div>
            </div>
        </div>
    )

}

export default UserProfile;