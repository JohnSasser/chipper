import React, { Component } from "react";
import Axios from "axios";
import Logo from "../../components/Logo";

class Login extends Component {
  state = {
    userName: "",
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
    Axios.post("/api/user", {
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
    // Some header animation goes here

    return (
      <div className="container">
        <Logo />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              id="exampleInputEmail1"
              value={this.state.userName}
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
// userName: userName,
// password: password
// })

export default Login;
