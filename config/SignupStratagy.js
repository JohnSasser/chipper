const Strategy = require("passport-local").Strategy;
const User = require("../models/User");
// for password encryption;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const SignupStrategy = new Strategy({ passReqToCallback: true }, function (
  req,
  username,
  password,
  done
) {
  // console.log(username, password);
  const encryptedPass = bcrypt.hashSync(password, saltRounds);
  // console.log("encryptedPassword", encryptedPass);
  const phone = req.body.phone;
  const email = req.body.email;
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const isAdmin = req.body.isAdmin;


  User.findOne({ username: username }, (err, user) => {
    // console.log("SignupStrategy.js / req:", req.body);
    if (err) {
      return done(err, user);
    }

    if (user) {
      return done("User Name is already taken:", user);
    }
  })
    // .lean()
    // .exec();
  // console.log("SignupStrategy.js / encrypted password:", encryptedPass);
  let user = {
    username,
    password: encryptedPass,
    phone,
    email,
    street,
    city,
    state,
    zip,
    isAdmin,
  };

  User.create(user, (error, user) => {
    if (error) {
      return done(error, null);
    }
    // delete the user password before it is sent back to the front-end;
    user.password = undefined;

    delete user.password;

    return done(null, user);
  });
});

module.exports = SignupStrategy;
