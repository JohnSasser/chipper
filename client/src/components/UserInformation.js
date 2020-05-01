import React from "react";

function UserInformation() {
    return (
        <div>
            <ul class="list-group userInformation">
                <li class="list-group-item active container">
                    <div className="row">
                        <h3>Email</h3>
                    </div>
                    <div className="row">
                        <h5>Example@fakemail.com</h5>
                    </div>
                </li>
                <li class="list-group-item active container">
                    <div className="row">
                        <h3>Phone</h3>
                    </div>
                    <div className="row">
                        <h5>555-555-5555</h5>
                    </div>
                </li>
                <li class="list-group-item active container">
                    <div className="row">
                        <h3>Your Pets Records</h3>
                    </div>
                    <div className="row">
                        <h5>HealthyPup.pdf</h5>
                    </div>
                </li>
                <li class="list-group-item active container">
                    <div className="row">
                        <h3>Your Vet Information</h3>
                    </div>
                    <div className="row">
                        <h5>VET</h5>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}

export default UserInformation