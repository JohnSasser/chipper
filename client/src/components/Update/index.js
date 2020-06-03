import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from '../../Context/AuthContext';

const Update = props => {
  
  const { user, setUser } = useContext(AuthContext);

  const [newInfo, setNewInfo] = useState({
    newEmail: "",
    newPhone: "",
    newStreet: "",
    newCity: "",
    newState: "",
    newZip: ""
  });

  const onChange = (e) => {
    setNewInfo({
      ...newInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let newStuffs = {};
    if (newInfo.newEmail) newStuffs.email = newInfo.newEmail;
    if (newInfo.newPhone) newStuffs.phone = newInfo.newPhone;
    if (newInfo.newStreet) newStuffs.street = newInfo.newStreet;
    if (newInfo.newCity) newStuffs.city = newInfo.newCity;
    if (newInfo.newState) newStuffs.state = newInfo.newState;
    if (newInfo.newZip) newStuffs.zip = newInfo.newZip;
    axios
      .post("/api/UpdateUserPage", {
        ...newStuffs
      })
      .then((res) => {
        // console.log('response from /api/UpdateUserPage: ', res.data);
        // console.log('current user info: ', user);
        // console.log('new stuffs...: ', newStuffs);
        setUser({
          ...user,
          ...newStuffs
        });
        // console.log('user after setting: ', user);
        if (res.status === 200) {
          props.history.push('/home');
        }
      });
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            Current Email: {user.email}
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
            Current Phone Number: {user.phone}
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
          {user.street}
          <br></br>
          {user.city}
          <br></br>
          {user.state}
          <br></br>
          {user.zip}
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
