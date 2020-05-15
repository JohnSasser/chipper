import React from "react";
// import Navigation from "../../components/Navigation"
import UserDirectory from "../../components/UserDirectory"
import UserInformation from "../../components/UserInformation"

import "./UserProfile.css"

function UserProfile() {
    return (
        <div>

            <UserDirectory />
            <div className="container">
                <div className="row">
                    <div className="col-12 userInformation">
                        <UserInformation />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserProfile;