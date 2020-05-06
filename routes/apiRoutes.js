const router = require("express").Router();
const db = require("../models");
// password encryption
const md5 = require("md5");

// respond with "hello world" when a GET request is made to the homepage;
router.post("/api/tester", function (req, res) {
  console.log(req.body);
  // res.send('hello world')
  const encryptedPass = md5(req.body.password);
  console.log("encrypted password:", encryptedPass);
  db.User.create({
    userName: req.body.username,
    password: encryptedPass,
  })
    .then(function (result) {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(function (err) {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/user", function (req, res) {
  console.log(req.body);
  db.User.findOne({
    username: req.body.username
  })
    .then(function (result) {
      console.log(`GET ROUTE /apiROUTES`, result);
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

module.exports = router;
