import React, { useState, useContext } from "react";
import "./style.css";
import chip from "../../images/chipper/chipperOne.png";
import { AuthContext } from '../../Context/AuthContext';
import AuthService from '../../Services/AuthService';
import { Link } from 'react-router-dom';
import Message from '../Message';

const Login = props => {
  console.log('login props: ', props);
  const [user, setUser] = useState({
    username: "",
    password: "",
    isAdmin: false,
    user: {},
  });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setUser({ username: "", password: "", isAdmin: null });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then(data => {
      console.log('data returned from AuthService.login: ', data);
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        console.log(user);
        authContext.setUser(user);
        console.log('authcontextuser: ', authContext.user);
        authContext.setIsAuthenticated(isAuthenticated);
        if (user.isAdmin){
          props.history.push('/adminPage');
        } else {
          props.history.push('/home');
        }
      } else {
        setMessage(message);
      }
    });
  };

  return (
    <div className="background">
      <div className="jumbotron jumbotron-fluid size shadow">
        <div className="container">
          <h1 className="display-4 shadow-head">Welcome to CHIPPER!</h1>
          <h3 className="lead">Does your pet have a mircrochip?</h3>
          <hr className="border-hr" />
          <p className="col-md-3 intro-p">If so then join our community! This platform allows owners to keep track of their pets mircrochip information and notify others if
          their pet is lost. It also gives veterinarian or rescues to check and see our database to help him/her make it home. Join us in the
          effort to keep all of your beloved little family members safe.
          </p>
          <div id="down-arrow">
            <span><a href="#about"><i className="fa fa-chevron-down down-arrow" aria-hidden="true"></i><span className="super-secret-text">.</span></a></span>
          </div>
        </div>
      </div>
      <div className=" container main-content">
        <img src={chip} alt="logo" className="center"></img>
        <h1 id="about" className="header-1">Welcome Back!</h1>
        <br />
        <form className="" onSubmit={onSubmit}>
          <div className="form-group">
            <label className="form-margin" htmlFor="">User Name</label>
            <input
              type="text"
              className="form-group form-style"
              name="username"
              value={user.username}
              onChange={onChange}
              maxLength="25"
            />
          </div>
          <label className="form-margin" htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-group form-style"
            name="password"
            value={user.password}
            onChange={onChange}
            maxLength="15"
          />
          <br />
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
      {message ? <Message message={message} /> : null}
    </div>
  );
}

export default Login;
