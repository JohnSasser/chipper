const Stratagy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const db = require("../models");

const LoginStratagy = new Stratagy(function (username, password, done) {
  // console.log("LoginStratagy, line 7", username, password);

  db.User.findOne({ username: username }, function (err, user) {
    // result of the password decryption - boolean;
    if (err) {
      // something went wrong in the DB;
      return done(err);
    }

    if (!user) {
      // if their is no user in DB;
      return done("User Name Is Incorrect", false);
    }

    const passAuth = bcrypt.compareSync(password, user.password);
    if (!passAuth) {
      // password auth;
      return done("Password Is Incorrect", false);
    } 

    if (user && password) {
      // both match, access granted;
      user.password = undefined;
      delete user.password;

      return done(null, user);
    }
  });
});

module.exports = LoginStratagy;
