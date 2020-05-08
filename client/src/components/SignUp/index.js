import React, { Component } from "react";
import Axios from "axios";

import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Jumbotron, Col, Row, Container } from "../Grid";

class Signup extends Component {
  state = {
    username: "",
    password: "",
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
      password: this.state.password
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
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input
              
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
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

          <button type="submit" className="btn btn-primary" onClick>
            Submit
          </button>
        </form>
      </Container>
    );
  }
}

export default Signup;
