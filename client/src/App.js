
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import userProfilePage from "./pages/UserProfile";
import PetsProfilePage from "./pages/UserPetsProfile";
import Admin from "./pages/Admin";
import Navigation from "./components/Navigation";
import Signup from "./components/SignUp";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route
            exact
            path={["/home"]}
            component={userProfilePage}
          ></Route>
          <Route
            exact
            path={["/userPetsProfile"]}
            component={PetsProfilePage}
          ></Route>
          <Route exact path={["/signUp"]} component={Signup}></Route>
          <Route exact path={["/adminPage"]} component={Admin}></Route>
          <Route exact path={["/", "/login"]} component={Login}></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
