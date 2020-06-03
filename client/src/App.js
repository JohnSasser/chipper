import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import PetsProfilePage from "./pages/PetsPage";
import Admin from "./pages/Admin";
import Signup from "./components/SignUp";
import UserFeed from "./pages/UserFeed";
import UserUpdate from "./pages/UserUpdate";
import AwsUploadContext from "./components/AwsUploadContext";
import Footer from "./components/Footer";
import "./App.css";
import AllPosts from "../src/pages/AllPostPage"
import AdminRoute from './hocs/AdminRoute';
import UserRoute from './hocs/UserRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
function App() {
  const [fileState, setFileState] = useState({});

  return (
    <AwsUploadContext.Provider value={{ fileState, setFileState }}>
      <div className="main">
        <Router>
          <UserRoute exact path={["/home"]} component={HomePage} />
          <UserRoute exact path={["/PetsPage"]} component={PetsProfilePage} />
          <UserRoute exact path={["/createPost"]} component={UserFeed} />
          <UserRoute exact path={["/userUpdate"]} component={UserUpdate} />
          <UserRoute exact path={["/allPosts"]} component={AllPosts} />
          <UnPrivateRoute exact path={["/signUp"]} component={Signup} />
          <UnPrivateRoute exact path={["/login"]} component={Login} />
          <UnPrivateRoute exact path={["/"]} component={Login} />
          <AdminRoute exact path={["/adminPage"]} component={Admin} />
          <Footer />
        </Router>
      </div>
    </AwsUploadContext.Provider>
  );
}

export default App;
