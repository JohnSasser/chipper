import React, { Component } from "react";
import Axios from "axios";
import { Jumbotron, Col, Row, Container } from "../Grid";
import { Redirect, Link } from "react-router-dom";
import "../../login.css"
import chip from "../../images/chipper/chipperOne.png"
import Footer from "../footer";

class Login extends Component {
  state = {
    username: "",
    password: "",
    redirect: false,
    isAdmin: false,
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

  handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      `handleFormSubmit username: ${this.state.username}, password: ${this.state.password}`
    );
    // const adminCheck = await Axios.post("/api/admin-check", {
    //   username: this.state.username,
    //   password: this.state.password
    // })
    // console.log(adminCheck)

    Axios.post("/api/login", {
      username: this.state.username,
      password: this.state.password
    })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          console.log(`Login-in Successful`);
          //ASSUMING res.data is a user object that has the isAdmin flag:
          let redirectRoute = res.data.isAdmin ? "/adminPage" : "/home";
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
    // if (this.state.adminRedirect) {
    //   return <Redirect to="/AdminPetInformation"></Redirect>
    // }
    if (this.state.redirect) {
      return <Redirect to={this.state.redirectRoute}></Redirect>;
    }
    return (
      <div className="background">
        <div className=" container main-content">
          <img src={chip} alt="logo" className="center" ></img>
          <h1 className="header-1">Welcome Back!</h1>

          <form className="" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                className="form-control form-style"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control form-style"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Submit
          </button>
            <Link className="link" to="/signUp">
              <button type="button" className="btn btn-outline-dark sign-up-link">
                Sign Up Here
            </button>
            </Link>
          </form>
        </div>
        <Footer/>
      </div>

    );
  }
}

export default Login;
