
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import userProfilePage from "./pages/UserProfile";
import PetsProfilePage from "./pages/UserPetsProfile";
import Admin from "./pages/Admin";
import Signup from "./components/SignUp";
import UserFeed from "./pages/UserFeed";
import UserUpdate from "./pages/UserUpdate";
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact path={["/userProfile"]}
            component={userProfilePage}
          ></Route>
          <Route
            exact path={["/userPetsProfile"]}
            component={PetsProfilePage}
          ></Route>
          <Route exact path={["/SignUp"]} component={Signup}></Route>
          <Route exact path={["/userFeed"]} component={UserFeed}></Route>
          <Route exact path={["/userUpdate"]} component={UserUpdate}></Route>
          <Route exact path={["/adminPage"]} component={Admin}></Route>
          <Route exact path={["/", "/Chipper"]} component={Login}></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
