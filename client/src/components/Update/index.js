import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../CurrentUserContext";
import axios from "axios";

function Update() {
  // current user for the user check;
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [newInfo, setNewInfo] = useState({
    newEmail: "",
    newPhone: "",
    newStreet: "",
    newCity: "",
    newState: "",
    newZip: ""
  });

  // set redirect for home route ****
  const [redirect, setRedirect] = useState(false);

  // use effect for res.data === user from /api/authenticate ****
  useEffect(() => {
    axios.get("/api/authenticate").then((res) => {
      if (!res.data) setRedirect("/Login");
      console.log(res);
    });
  }, []);

  const onChange = (e) => {
    setNewInfo({
      ...newInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let newStuffs = { ...currentUser };
    if (newInfo.newEmail) newStuffs.email = newInfo.newEmail;
    if (newInfo.newPhone) newStuffs.phone = newInfo.newPhone;
    if (newInfo.newStreet) newStuffs.street = newInfo.newStreet;
    if (newInfo.newCity) newStuffs.city = newInfo.newCity;
    if (newInfo.newState) newStuffs.state = newInfo.newState;
    if (newInfo.newZip) newStuffs.zip = newInfo.newZip;
    axios
      .post("/api/userUpdate", {
        newInfo: newStuffs,
        user: currentUser._id,
      })
      .then((res) => {
        setCurrentUser({
          ...newStuffs
        });
        if (res.status === 200) {
          setRedirect("/Home");
        }
      });
  };

  // add the login redirect to all primary components; ****
  return redirect ? (
    <Redirect to={redirect} />
  ) : (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              Current Email: {currentUser.email}
            </label>
            <br></br>
            <label htmlFor="exampleInputEmail1">New Email address:</label>
            <input
              type="email"
              name="newEmail"
              value={newInfo.newEmail}
              onChange={onChange}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter New Email Here"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">
              Current Phone Number: {currentUser.phone}
            </label>
            <br></br>
            <label htmlFor="exampleInputPassword1">New Phone Number Here</label>
            <input
              type="phone"
              name="newPhone"
              value={newInfo.newPhone}
              onChange={onChange}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter New Phone Number Here"
            ></input>
          </div>

          <label htmlFor="exampleInputPassword1">
            Current Address:
            <br></br>
            {currentUser.street}
            <br></br>
            {currentUser.city}
            <br></br>
            {currentUser.state}
            <br></br>
            {currentUser.zip}
          </label>

          <div className="form-group">

            <br></br>
            <label htmlFor="exampleInputPassword1">New Street Here</label>
            <input
              type="text"
              name="newStreet"
              value={newInfo.newStreet}
              onChange={onChange}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter New Street Here"
            ></input>

            <br></br>
            <label htmlFor="exampleInputPassword1">New City</label>
            <input
              type="text"
              name="newCity"
              value={newInfo.newCity}
              onChange={onChange}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter New City"
            ></input>

            <br></br>
            <label htmlFor="exampleInputPassword1">New State</label>
            <input
              type="text"
              name="newState"
              value={newInfo.newState}
              onChange={onChange}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter New State"
            ></input>

            <br></br>
            <label htmlFor="exampleInputPassword1">New Zip Code</label>
            <input
              type="text"
              name="newZip"
              value={newInfo.newZip}
              onChange={onChange}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter New Zip Code"
            ></input>
          </div>

          <button type="submit" onClick={onSubmit} className="btn btn-primary">
            Submit
        </button>
        </form>
      </div>
    );
}

export default Update;
