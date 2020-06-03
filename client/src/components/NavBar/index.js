import React, { useContext } from "react";
import { Link } from "react-router-dom";
import chip from "../../images/chipper/chipperOne.png";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";
import "./style.css";

const NavBar = (props) => {
  const { setIsAuthenticated, setUser } = useContext(AuthContext);

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  return (
    <div className="container">
      <div className="navbar navbar-expand-lg head fixed-top">
        <img className="navbar-brand img" alt="chipper logo" src={chip} ></img>
        <div id="nav" className="space">
          <Link className="nav-item space" to="/home">
            <button type="button" className="btn btn-dark btn-lg">Home</button>
          </Link>
          <Link className="nav-item space" to="/create-post">
            <button type="button" className="btn btn-dark btn-lg">Create Post</button>
          </Link>
          <Link className="nav-item space" to="/feed">
            <button type="button" className="btn btn-dark btn-lg">Feed</button>
          </Link>
          <Link className="nav-item space" to="/pets">
            <button type="button" className="btn btn-dark btn-lg">Pets</button>
          </Link>
          <Link className="nav-item space" to="/">
            <button type="button" className="btn btn-outline-dark btn-lg" onClick={onClickLogoutHandler}>Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
