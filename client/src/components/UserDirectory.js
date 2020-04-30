import React from "react";

function UserDirectory() {
    return (
        <div className="directory">
            <ul class="list-group">
                <li class="list-group-item active"><img src="https://www.placecage.com/100/100"></img></li>
                <li class="list-group-item"><button>Feed</button></li>
                <li class="list-group-item"><button>Pets</button></li>
                <li class="list-group-item"><button>Update Profile?</button></li>
                <li class="list-group-item"><button>Settings</button></li>
                <li class="list-group-item"><button>Logout</button></li>
            </ul>
        </div>
    )
}

export default UserDirectory;