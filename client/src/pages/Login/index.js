import React, { Component } from "react";
import Axios from "axios";
import Logo from "../../components/Logo";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    redirect: false,
    isAdmin: false,
  };

  handleChange = (e) => {
    console.log(e.target, e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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
        console.log(`GET REQUEST Login Axios`, res);
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

  //   Login From Render()
  render() {
    if (this.state.redirect) {
      return <Redirect to="/home"></Redirect>
    }

    return (
      <div className="container">
        <Logo />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="exampleInputEmail1"
              value={this.state.username}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group" style={{backgroundColor: "green"}}>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
// write the logic for checking the typed in username and password to
// username and password in the DB.

// in the Server api route;
// db.findOne({
// username: username,
// password: password
// })

export default Login;
