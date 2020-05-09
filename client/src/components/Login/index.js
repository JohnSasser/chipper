import React, { Component } from "react";
import Axios from "axios";
import { Jumbotron, Col, Row, Container } from "../Grid";
import { Redirect, Link } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    redirect: false,
    redirectRoute: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = () => {
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
      password: this.state.password
    })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          console.log(`Login-in Successful`);
          //ASSUMING res.data is a user object that has the isAdmin flag:
          let redirectRoute = res.data.isAdmin ? "/admin" : "/home";
          console.log(redirectRoute);
          this.setState({
            redirect: true,
            redirectRoute
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
      return <Redirect to={this.state.redirectRoute}></Redirect>;
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

export default Login;
