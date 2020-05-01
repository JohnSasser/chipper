import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import userProfilePage from "./pages/UserProfile"
import PetsProfilePage from "./pages/UserPetsProfile"
import Admin from "./pages/Admin"
import Navigation from "./components/Navigation"
import Signup from './components/SignUp';

function App() {

  return (

   <Signup />

    <Router>
    
      <div>
        <Navigation />
        <Switch>
          <Route exact path={["/userProfile"]} component={userProfilePage}></Route>
          <Route exact path={["/userPetsProfile"]} component={PetsProfilePage}></Route>
          <Route exact path={["/adminPage"]} component={Admin}></Route>
          <Route exact path={["/", "/Chipper"]} component={Login}></Route>
        </Switch>
      </div>
    </Router >

  );
}

export default App;
