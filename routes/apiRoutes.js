const router = require("express").Router();
const db = require("../models");
const passport = require('../passport')

// password encryption
const md5 = require("md5");

// respond with "hello world" when a GET request is made to the homepage;
router.post('/api/signup', function (req, res) {
  console.log(req.body)

  // const encryptedPass = md5(req.body.password)
  // console.log("encrypted password:", encryptedPass)
  db.User.create({
    userName: req.body.username,
    password: req.body.password,
  })
    .then(function (result) {
      console.log("pushing ", result, " to database");
      res.status(200).json(result);
    })
    .catch(function (err) {
      console.log(err);
      res.json(err);
    });
});

// var passport = require('passport')
//   , LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     db.User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

router.post('/api/user', function (req, res) {
  console.log("req.body: ", req.body)
  db.User.findOne({ userName: req.body.username, password: req.body.password })
    .then(user => {
      console.log("this is a user from the database: ", user)
      res.status(200).json(user)
    })
    .catch(function (err) {
      res.json(err)
      console.log("apiRoutes: ", err)
    })
})

module.exports = router;

