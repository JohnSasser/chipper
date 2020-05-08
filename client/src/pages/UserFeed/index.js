import React from "react";
import UserDirectory from "../../components/UserDirectory";
import Feed from "../../components/Feed"


function UserFeed () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <UserDirectory />
                </div>
                <div className="col-10 userInformation">
                    <Feed/>
                </div>
            </div>
        </div>
    )
}

export default UserFeed;