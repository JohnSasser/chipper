import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PetsProfilePage from "./pages/PetsPage";
import AdminPage from "./pages/AdminPage";
import Signup from "./pages/SignUpPage";
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
          <UserRoute exact path={["/pets"]} component={PetsProfilePage} />
          <UserRoute exact path={["/create-post"]} component={CreatePostPage} />
          <UserRoute exact path={["/UpdateUserPage"]} component={UpdateUserPage} />
          <UserRoute exact path={["/feed"]} component={FeedPage} />
          <UnPrivateRoute exact path={["/signUp"]} component={Signup} />
          <UnPrivateRoute exact path={["/login"]} component={LoginPage} />
          <UnPrivateRoute exact path={["/"]} component={LoginPage} />
          <AdminRoute exact path={["/adminPage"]} component={AdminPage} />
          <Footer />
        </Router>
      </div>
    </AwsUploadContext.Provider>
  );
}

export default App;
