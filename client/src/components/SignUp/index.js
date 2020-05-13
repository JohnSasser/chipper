import React, { useState } from "react";
import Axios from "axios";

import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import { Jumbotron, Col, Row, Container } from "../Grid";
import chip from "../../images/chipper/chipperOne.png";
import Footer from "../footer";
import "../../signup.css";

function Signup() {
  const [signupState, setSignupState] = useState({
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

  const onChange = (e) => {
    console.log(e.target, e.target.name, e.target.value);
    if (e.target.type === "checkbox") {
      setSignupState({
        ...signupState,
        isAdmin: !signupState.isAdmin,
      });
    }
    setSignupState({
      ...signupState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (signupState.isAdmin === true) {
      const response = await Axios.post("/api/admin-sign-up", {
        key: signupState.key,
      });
      console.log(response.status);
      if (response.status === 401) {
        console.log(response.status);
        return;
      }
      if (response.status === 200) {
        console.log(response.status);
        setSignupState({
          ...signupState,
          adminRedirect: true,
        });
      }
    }

    console.log(`handleFormSubmit ${signupState}`);

    Axios.post("/api/signup", {
      username: signupState.username,
      password: signupState.password,
      phone: signupState.phone,
      email: signupState.email,
      street: signupState.street,
      city: signupState.city,
      state: signupState.state,
      zip: signupState.zip,
      isAdmin: signupState.isAdmin,
    })
      .then((res) => {
        console.log(res);
        if (res.data) {
          console.log(`Sign-in Successful`);
          setSignupState({
            ...signupState,
            redirect: true,
          });
        }
      })
      .catch((err) => {
        if (err) console.log(`Sign-Up server error ${err}`);
      });
  };

  if (signupState.adminRedirect) {
    return <Redirect to="/adminPage"></Redirect>;
  }
  if (signupState.redirect) {
    return <Redirect to="/login"></Redirect>;
  }

  const adminKeyInput = signupState.isAdmin ? (
    <div className="col-auto">
      <label className="sr-only" htmlFor="inlineFormInput">
        Name
      </label>
      <input
        type="text"
        className="form-control mb-2"
        name="key"
        placeholder="Enter Admin Key"
        value={signupState.key}
        onChange={onChange}
      />
    </div>
  ) : null;
  return (
    <div className="background">
      <div className="container main-content">
        <img src={chip} alt="logo" className="center"></img>
        <form className="" onSubmit={onSubmit}>
          {/* username */}
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input
              className="form-control form-style"
              name="username"
              value={signupState.username}
              onChange={onChange}
            />
          </div>
          {/* password */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control form-style"
              name="password"
              value={signupState.password}
              onChange={onChange}
            />
          </div>
          {/* phone */}
          <div className="form-group">
            <label htmlFor="inputAddress">Phone Number</label>
            <input
              type="number"
              className="form-control form-style"
              name="phone"
              value={signupState.phone}
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
              value={signupState.email}
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
              value={signupState.street}
              onChange={onChange}
              placeholder="1234 Main St"
            />
          </div>
          {/* city */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input
                type="text"
                className="form-control form-style"
                id="inputCity"
                name="city"
                value={signupState.city}
                onChange={onChange}
                placeholder="Atlanta"
              />
            </div>
            {/* state */}
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <input
                type="text"
                className="form-control form-style"
                id="inputCity"
                name="state"
                value={signupState.state}
                onChange={onChange}
                placeholder="Georgia"
              />
            </div>
            {/* zip */}
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input
                type="text"
                className="form-control form-style"
                id="inputZip"
              />
            </div>
          </div>

          {/* ***** checkbox not working when tied to state */}
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              name="is-admin"
              checked={signupState.isAdmin}
              onChange={onChange}
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
              Check if Admin
            </label>
          </div>

          {adminKeyInput}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link className="login-link" to="/login">
            <button type="button" className="btn btn-outline-dark">
              Or Login
            </button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
