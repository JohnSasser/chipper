import React, { useContext } from "react";
import { Link } from "react-router-dom";
import chip from "../../images/chipper/chipperOne.png";
import AuthService from '../../Services/AuthService';
import { AuthContext } from '../../Context/AuthContext';
import "./style.css";


const UserDirectory = props => {
const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

  const onClickLogoutHandler = () => {
    AuthService.logout().then(data => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  return (
    <div className="jumbotron jumbotron-fluid head">
      <img className="img" alt="chipper logo" src={chip} width="150px"></img>
      <div id="nav" className="space">
        <Link className="nav-item space" to="/home">
          <button type="button" className="btn btn-dark btn-lg">Home</button>
        </Link>
        <Link className="nav-item space" to="/createPost">
          <button type="button" className="btn btn-dark btn-lg">Create Post</button>
        </Link>
        <Link className="nav-item space" to="/allPosts">
          <button type="button" className="btn btn-dark btn-lg">Feed</button>
        </Link>
        <Link className="nav-item space" to="/userPetsProfile">
          <button type="button" className="btn btn-dark btn-lg">Pets</button>
        </Link>
        <Link className="nav-item space" to="/">
          <button type="button" className="btn btn-outline-dark btn-lg" onClick={onClickLogoutHandler}>Logout</button>
        </Link>
      </div>
    </div>
  );
}

export default UserDirectory;
