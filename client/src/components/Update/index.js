import React, { useContext, useState } from "react";
import UserContext from "../CurrentUserContext";
import axios from "axios";

function Update() {
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const [newInfo, setNewInfo] = useState({
        newEmail: "",
        newPhone: ""
    })

    const onChange = (e) => {
        setNewInfo({
            ...newInfo,
            [e.target.name]: e.target.value,
        });

    }

    const onSubmit = (e) => {
        axios.post("/api/userupdate", {
            newInfo: newInfo,
            user: currentUser._id
        }).then(res => {
            console.log(res)
            setCurrentUser({
                ...currentUser,
                email: res.data.email,
                phone: res.data.phone
            }
            )
        })
    }


    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Current Email: {currentUser.email}</label>
                    <br></br>
                    <label for="exampleInputEmail1">New Email address:</label>
                    <input type="email" name="newEmail" value={newInfo.newEmail} onChange={onChange} class="form-control" id="exampleInputEmail1" placeholder="Enter New Email Here"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Current Phone Number: {currentUser.phone}</label>
                    <br></br>
                    <label for="exampleInputPassword1">New Phone Number Here</label>
                    <input type="phone" name="newPhone" value={newInfo.newPhone} onChange={onChange} class="form-control" id="exampleInputPassword1" placeholder="Enter New Phone Number Here"></input>
                </div>

                <button type="submit" onClick={onSubmit} class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Update;