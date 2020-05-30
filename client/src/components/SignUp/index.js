import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import chip from "../../images/chipper/chipperOne.png";
import AuthService from "../../Services/AuthService";
import Message from "../Message";
import "./style.css";

const Signup = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    key: "",
    redirect: false,
    adminRedirect: false,
    isAdmin: false,
  });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (e) => {
    // // console.log("working")
    // // console.log(typeof e.target.type)
    if (e.target.type === "checkbox") {
      if (user.isAdmin === false) {
        setUser({
          ...user,
          isAdmin: true,
        });
      } else {
        setUser({
          ...user,
          isAdmin: false,
        });
      }
    } else {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }
  };

  const resetForm = () => {
    setUser({ username: "", password: "", role: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/login");
        }, 2000);
      }
    });
  };

  const adminKeyInput = user.isAdmin ? (
    <div className="col-auto admin-key-input">
      <label className="sr-only" htmlFor="inlineFormInput">
        Name
      </label>
      <input
        type="text"
        className="form-control mb-2"
        name="key"
        placeholder="Enter Admin Key"
        value={user.key}
        onChange={onChange}
      />
    </div>
  ) : null;

  return (
    <div className="background">
      <div className="container main-content">
        <img src={chip} alt="logo" className="center"></img>
        <form className="group-form" onSubmit={onSubmit}>
          {message ? <Message message={message} /> : null}

          {/* username */}
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input
              className="form-control form-style"
              name="username"
              value={user.username}
              onChange={onChange}
              placeholder="Drax-The-Dogstroyer"
            />
          </div>
          {/* password */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control form-style"
              name="password"
              value={user.password}
              onChange={onChange}
              placeholder="************"
            />
          </div>
          {/* phone */}
          <div className="form-group">
            <label htmlFor="inputAddress">Phone Number</label>
            <input
              type="number"
              className="form-control form-style"
              name="phone"
              value={user.phone}
              onChange={onChange}
              placeholder="678 456 1234"
            />
          </div>
          {/* email */}
          <div className="form-group">
            <label htmlFor="inputAddress">Email</label>
            <input
              type="email"
              className="form-control form-style"
              name="email"
              value={user.email}
              onChange={onChange}
              placeholder="james@jamestown.com"
            />
          </div>
          {/* street address */}
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control form-style"
              name="street"
              value={user.street}
              onChange={onChange}
              placeholder="1234 Main St"
            />
          </div>
          {/* city */}
          <div className="form-row">
            <div className="form-group col-md-6 city-col">
              <label htmlFor="inputCity">City</label>
              <input
                type="text"
                className="form-control form-style"
                id="inputCity"
                name="city"
                value={user.city}
                onChange={onChange}
                placeholder="Atlanta"
              />
            </div>
            {/* state */}
            <div className="form-group col-md-4 city-col">
              <label htmlFor="inputState">State</label>
              <input
                type="text"
                className="form-control form-style"
                id="inputState"
                name="state"
                value={user.state}
                onChange={onChange}
                placeholder="Georgia"
              />
            </div>
            {/* zip */}
            <div className="form-group col-md-2 city-col">
              <label htmlFor="inputZip">Zip</label>
              <input
                type="text"
                className="form-control form-style"
                id="inputZip"
                placeholder="30303"
              />
            </div>
          </div>

          {/* ***** checkbox not working when tied to state */}
          <div className="custom-control custom-checkbox form-check">
            <input
              type="checkbox"
              className="custom-control-input form-check-input"
              id="customSwitch1"
              name="is-admin"
              checked={user.isAdmin}
              onChange={onChange}
            />
            <label
              className="custom-control-label custom-switch-1"
              htmlFor="customSwitch1"
            >
              Check if Admin
            </label>
          </div>

          {adminKeyInput}

          <button type="submit" className="btn btn-outline-dark">
            Submit
          </button>
          <Link className="login-link" to="/login">
            <button
              type="button"
              className="btn btn-outline-warning sign-up-link"
            >
              Or Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
