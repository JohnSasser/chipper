import React from "react";
import Logo from "../../components/Logo"
import passport from "passport";
function Login() {

    // Some header animation goes here
    return (<div className="container">
        <Logo/>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"></input>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </div>

    )

}

// write the logic for checking the typed in username and password to 
// username and password in the DB. 

// in the Server api route;
// db.findOne({
    // userName: userName,
    // password: password
// })




export default Login