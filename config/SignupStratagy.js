const Strategy = require("passport-local").Strategy;
const db = require("../models");
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

  db.User.findOne({ username: username })
    .lean()
    .exec((err, user) => {
      // console.log("SignupStrategy.js / req:", req.body);
      if (err) {
        return done(err, user);
      }

      if (user) {
        return done("User Name is already taken", null);
      }

      // console.log("SignupStrategy.js / encrypted password:", encryptedPass);

      let newUser = db.User.create({
        username,
        password: encryptedPass,
        phone,
        email,
        street,
        city,
        state,
        zip,
        isAdmin,
      });

      console.log(newUser);

      newUser.save((error, inserted) => {
        if (error) {
          return done(error, null);
        }
        return done(null, inserted);
      });
    });
});

module.exports = SignupStrategy;
