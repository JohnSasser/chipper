const Stratagy = require("passport-local").Strategy;
const db = require('../models')

const SignupStratagy = new Stratagy(function (username, password, done) {
  db.User.findOne({ username: username }, function (err, user) {
    console.log(user, err);
    if (err) {
      // something went wrong in the DB;
      return done(err);
    }
    if (!user) {
      // if their is no user in DB;
      return done(null, false);
    }
    if (user.password !== password) {
      // if the password does NOT match the DB pass;
      return done(null, false);
    }
    // both match;
    return done(null, user);
  });
});

module.exports = SignupStratagy;
