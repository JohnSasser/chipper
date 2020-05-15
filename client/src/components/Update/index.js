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
  });

  // set redirect for home route ****
  const [redirect, setRedirect] = useState(false);

  // use effect for res.data === user from /api/authenticate ****
  useEffect(() => {
    console.log("current user Update.index.js", currentUser);
    axios.get("/api/authenticate").then((res) => {
      if (!res.data) setRedirect(true);
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

    axios
      .post("/api/userupdate", {
        newInfo: newInfo,
        user: currentUser._id,
      })
      .then((res) => {
        console.log(res);
        setCurrentUser({
          ...currentUser,
          email: res.data.email,
          phone: res.data.phone,
        });
      });
  };

  // add the login redirect to all primary components; ****
  return redirect ? (
    <Redirect to="/login" />
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

        <button type="submit" onClick={onSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Update;
