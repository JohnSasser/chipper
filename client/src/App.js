import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import userProfilePage from "./pages/UserProfile";
import PetsProfilePage from "./pages/UserPetsProfile";
import Admin from "./pages/Admin";
import Signup from "./components/SignUp";
import UserFeed from "./pages/UserFeed";
import UserUpdate from "./pages/UserUpdate";
import UserContext from "./components/CurrentUserContext";
import AwsUploadContext from "./components/AwsUploadContext";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [fileState, setFileState] = useState({});

  return (
    <AwsUploadContext.Provider value={{ fileState, setFileState }}>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="main">
          <Router>
            <Switch>
              <Route exact path={["/home"]} component={userProfilePage}></Route>
              <Route
                exact
                path={["/userPetsProfile"]}
                component={PetsProfilePage}
              ></Route>
              <Route exact path={["/userFeed"]} component={UserFeed}></Route>
              <Route
                exact
                path={["/userUpdate"]}
                component={UserUpdate}
              ></Route>
              <Route exact path={["/signUp"]} component={Signup}></Route>
              <Route exact path={["/adminPage"]} component={Admin}></Route>
              <Route exact path={["/", "/login"]} component={Login}></Route>
            </Switch>
          </Router>
          <Footer />
        </div>
      </UserContext.Provider>
    </AwsUploadContext.Provider>
  );
}

export default App;
