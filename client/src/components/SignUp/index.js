import React, { Component } from "react";
import Axios from "axios";

import Jumbotron from "../Jumbotorn";
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";


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
    isAdmin: false,
    redirect: false,
  };

  handleChange = (e) => {
    console.log(e.target, e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //   handleSubmit to send the axios req to DB for username: & password:
  //   If successful, will redirect to Login page.
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `handleFormSubmit username: ${this.state.username}, password: ${this.state.password}`
    );

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

          // debugger;
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
    return (
      <Container>
        <Jumbotron text="Sign Up" />

        <form className="" onSubmit={this.handleSubmit}>
          {/* username */}
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
                className="form-control"
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
                className="form-control"
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
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" onClick>
            Submit
          </button>
          <Link className="login-link" to="/login"><button type="button" className="btn btn-warning">Or Login</button></Link>
        </form>
      </Container>
    );
  }
}

export default Signup;
