import React, { Component } from "react";
import Axios from "axios";

import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import { Jumbotron, Col, Row, Container } from "../Grid";
import chip from "../../images/chipper/chipperOne.png"
import Footer from "../footer";
import "../../signup.css"

class Signup extends Component {
  state = {
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
    isAdmin: false,
  };

  handleChange = (e) => {
    console.log(e.target, e.target.name, e.target.value);
    if (e.target.type === "checkbox") {
      this.setState({
        isAdmin: !this.state.isAdmin,
      });
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //   handleSubmit to send the axios req to DB for username: & password:
  //   If successful, will redirect to Login page.
  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.state.isAdmin === true) {
      const response = await Axios.post("/api/admin-sign-up", {
        key: this.state.key
      })
      if (response.status === 401) {
        console.log(response.status)
        return
      }
    }

    console.log(`handleFormSubmit ${this.state}`);
    Axios.post("/api/signup", {
      username: this.state.username,
      password: this.state.password,
      phone: this.state.phone,
      email: this.state.email,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    })
      .then((res) => {
        console.log(res);
        if (res.data) {
          console.log(`Sign-in Successful`);
          this.setState({
            redirect: true,
          });
        }
      })
      .catch((err) => {
        if (err) console.log(`Sign-Up server error ${err}`);
      });
  };

  //   Bootstrap Login Form;
  render() {
    if (this.state.redirect) {
      return <Redirect to="/login"></Redirect>;
    }
    const adminKeyInput = this.state.isAdmin ? (
      <div className="col-auto">
        <label className="sr-only" htmlFor="inlineFormInput">
          Name
        </label>
        <input
          type="text"
          className="form-control mb-2"
          name="key"
          placeholder="Enter Admin Key"
          value={this.state.key}
          onChange={this.handleChange}
        />
      </div>
    ) : null;

    return (
      <div className="background">
        <div className="container main-content">
          <img src={chip} alt="logo" className="center" ></img>
          <form className="" onSubmit={this.handleSubmit}>
            {/* username */}
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">User Name</label>
              <input
                className="form-control form-style"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            {/* password */}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control form-style"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            {/* phone */}
            <div className="form-group">
              <label htmlFor="inputAddress">Phone Number</label>
              <input
                type="number"
                className="form-control form-style"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
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
                value={this.state.email}
                onChange={this.handleChange}
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
                value={this.state.street}
                onChange={this.handleChange}
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
                  value={this.state.city}
                  onChange={this.handleChange}
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
                  value={this.state.state}
                  onChange={this.handleChange}
                  placeholder="Georgia"
                />
              </div>
              {/* zip */}
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control form-style" id="inputZip" />
              </div>
            </div>

{/* ***** checkbox not working when tied to state */}
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              name="is-admin"
              checked={this.state.isAdmin}
              onChange={this.handleChange}
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
        <Footer/>
      </div>
    );
  }
}

export default Signup;
