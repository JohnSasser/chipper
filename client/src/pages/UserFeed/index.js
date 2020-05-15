import React from "react";
import UserDirectory from "../../components/UserDirectory";
import Feed from "../../components/Feed"


function UserFeed() {
    return (
        <div>
        <UserDirectory />
        <div className="container">
            <div className="row">
                <div className="col-12 userInformation">
                    <Feed />
                </div>
            </div>
        </div>
        </div>
    )
}

export default UserFeed;