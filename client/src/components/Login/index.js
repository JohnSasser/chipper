import React, { Component } from "react";
import Axios from "axios";
import { Jumbotron, Col, Row, Container } from "../Grid";
import { Redirect, Link } from "react-router-dom";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    redirect: false,
    isAdmin: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    this.setState({
      redirect: true,
    });
  };

  //   handleSubmit to send the axios req to DB for username: & password:
  //   If successful, will redirect to Login page.
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `handleFormSubmit username: ${this.state.username}, password: ${this.state.password}`
    );

    Axios.post("/api/login", {
      username: this.state.username,
      password: this.state.password,
    })
      .then((res) => {
        console.log(res);
        if (res.data) {
          console.log(`Login-in Successful`);
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
      return <Redirect to="/home"></Redirect>;
    }
    return (
      <Container>
        <Jumbotron text="Log In" />

        <form className="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link className="sign-up-link" to="/signUp">
            <button type="button" className="btn btn-warning">
              Sign Up Here
            </button>
          </Link>
        </form>
      </Container>
    );
  }
}

export default Signup;
