import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import PetsProfilePage from "./pages/PetsPage";
import AdminPage from "./pages/AdminPage";
import Signup from "./components/SignUp";
import CreatePostPage from "./pages/CreatePostPage";
import UpdateUserPage from "./pages/UpdateUserPage";
import AwsUploadContext from "./components/AwsUploadContext";
import Footer from "./components/Footer";
import FeedPage from "./pages/FeedPage";
import AdminRoute from "./hocs/AdminRoute";
import UserRoute from "./hocs/UserRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";
import "./App.css";

function App() {
  // For uploading images in AwsUploadImage component;
  const [fileState, setFileState] = useState({});

  return (
    <AwsUploadContext.Provider value={{ fileState, setFileState }}>
      <div className="main">
        <Router>
          <UserRoute exact path={["/home"]} component={HomePage} />
          <UserRoute exact path={["/PetsPage"]} component={PetsProfilePage} />
          <UserRoute exact path={["/createPost"]} component={CreatePostPage} />
          <UserRoute exact path={["/UpdateUserPage"]} component={UpdateUserPage} />
          <UserRoute exact path={["/FeedPage"]} component={FeedPage} />
          <UnPrivateRoute exact path={["/signUp"]} component={Signup} />
          <UnPrivateRoute exact path={["/login"]} component={Login} />
          <UnPrivateRoute exact path={["/"]} component={Login} />
          <AdminRoute exact path={["/adminPage"]} component={AdminPage} />
          <Footer />
        </Router>
      </div>
    </AwsUploadContext.Provider>
  );
}

export default App;
