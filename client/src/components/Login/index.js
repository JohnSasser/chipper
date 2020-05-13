import React, { useState } from "react";
import Axios from "axios";
import { Jumbotron, Col, Row, Container } from "../Grid";
import { Redirect, Link } from "react-router-dom";
import "../../login.css";
import chip from "../../images/chipper/chipperOne.png";
import Footer from "../footer";

function Login() {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
    redirect: false,
    isAdmin: false,
    redirectRoute: "",
  });

  const onChange = (e) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    setLoginState({
      ...loginState,
      redirect: true,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(
      `handleFormSubmit username: ${loginState.username}, password: ${loginState.password}`
    );

    Axios.post("/api/login", {
      username: loginState.username,
      password: loginState.password,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          console.log(`Login-in Successful`);
          //ASSUMING res.data is a user object that has the isAdmin flag:
          let redirectRoute = res.data.isAdmin ? "/adminPage" : "/home";
          console.log(redirectRoute);
          setLoginState({
            ...loginState,
            redirect: true,
            redirectRoute,
          });
        }
      })
      .catch((err) => {
        if (err) console.log(`Sign-Up server error ${err}`);
      });
  };

  if (loginState.redirect) {
    return <Redirect to={loginState.redirectRoute}></Redirect>;
  }

  return (
    <div className="background">
      <div className=" container main-content">
        <img src={chip} alt="logo" className="center"></img>
        <h1 className="header-1">Welcome Back!</h1>

        <form className="" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input
              type="text"
              className="form-control form-style"
              name="username"
              value={loginState.username}
              onChange={onChange}
            />
          </div>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control form-style"
            name="password"
            value={loginState.password}
            onChange={onChange}
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
      <Footer />
    </div>
  );
}

export default Login;
