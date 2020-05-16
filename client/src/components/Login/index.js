import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import "./style.css";
import chip from "../../images/chipper/chipperOne.png";
import Footer from "../Footer";
import UserContext from "../CurrentUserContext";

function Login() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
    redirect: false,
    isAdmin: false,
    redirectRoute: "",
    user: {},
  });

  useEffect(() => {
    setCurrentUser(loginState.user);
  }, [loginState.user]);

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

    axios.post("/api/login", {
      username: loginState.username,
      password: loginState.password,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          console.log(`Login-in Successful`);
          //ASSUMING res.data is a user object that has the isAdmin flag:
          let redirectRoute = res.data.isAdmin ? "/adminPage" : "/home";

          setLoginState({
            ...loginState,
            redirect: true,
            user: res.data.user,
            redirectRoute,
          });
        }
      })
      .catch((err) => {
        if (err) console.log(`Sign-Up server error ${err}`);
      });
  };

  if (loginState.redirect) {
    return (
      <Redirect to={loginState.redirectRoute}>
        <UserContext.Provider value={loginState.user}></UserContext.Provider>
      </Redirect>
    );
  }

  return (

    <div className="background">
      <div className="jumbotron jumbotron-fluid size shadow">
        <div className="container">
          <h1 className="display-4 shadow-head">Welcome to CHIPPER!</h1>
          <h3 className="lead">Does your pet have a mircrochip?</h3>
          <hr className="border-hr"/>
          <p className="col-md-3 intro-p">If so then join our community! This platform allows owners to keep track of their pets mircrochip information and notify others if 
            their pet is lost. It also gives veterinarian or rescues to check and see our database to help him/her make it home. Join us in the 
            effort to keep all of your beloved little family members safe.  
          </p>
          <div id="down-arrow">
            <span><a href="#about"><i className="fa fa-chevron-down down-arrow" aria-hidden="true"></i></a></span>
        </div>
        </div>
      </div>
      <div className=" container main-content">
        <img src={chip} alt="logo" className="center"></img>
        <h1 id="about"className="header-1">Welcome Back!</h1>
        <br/>
        <form className="" onSubmit={onSubmit}>
          <div className="form-group">
            <label className="form-margin" htmlFor="">User Name</label>
            <input
              type="text"
              className="form-group form-style"
              name="username"
              value={loginState.username}
              onChange={onChange}
              maxLength="25"
            />
          </div>
          <label className="form-margin" htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-group form-style"
            name="password"
            value={loginState.password}
            onChange={onChange}
            maxLength="15"
          />
          <br/>
          <button type="submit" className="btn btn-outline-dark">
            Submit
          </button>
          <Link className="link" to="/signUp">
            <button type="button" className="btn btn-outline-warning sign-up-link">
              Sign Up Here
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
