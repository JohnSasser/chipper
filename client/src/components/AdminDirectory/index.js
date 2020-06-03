import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";

const AdminDirectory = (props) => {
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
    <div className="admin-nav mb-5">
      <Link className="nav-item space" to="/">
        <button
          type="button"
          className="btn btn-outline-dark btn-lg"
          onClick={onClickLogoutHandler}
        >
          Logout
        </button>
      </Link>
    </div>
  );
};

export default AdminDirectory;
