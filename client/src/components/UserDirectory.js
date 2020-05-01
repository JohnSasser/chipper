import React from "react";

function UserDirectory() {
    return (
        <div className="directory">
            <ul className="list-group">
                <li className="list-group-item active"><img src="https://www.placecage.com/100/100"></img></li>
                <li className="list-group-item"><button>Feed</button></li>
                <li className="list-group-item"><button>Pets</button></li>
                <li className="list-group-item"><button>Update Profile?</button></li>
                <li className="list-group-item"><button>Settings</button></li>
                <li className="list-group-item"><button>Logout</button></li>
            </ul>
        </div>
    )
}

export default UserDirectory;