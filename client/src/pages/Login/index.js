import React from "react";
import Logo from "../../components/Logo"
function Login() {

    // Some header animation goes here
    return (<div className="container">
        <Logo/>
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"></input>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </div>

    )

}

export default Login