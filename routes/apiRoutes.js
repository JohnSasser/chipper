const router = require("express").Router();
const db = require("../models");
const passport = require("passport");
const bcrypt = require("bcrypt")

// password encryption


// respond with "hello world" when a GET request is made to the homepage;
router.post("/api/signup", function (req, res) {
  console.log(req.body);
  // const encryptedPass = bcrypt(req.body.password)
  // console.log("encrypted password:", encryptedPass)
  db.User.create({
    username: req.body.username,
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


// router.post('/url', someFunction, callback)
// authentication for passport route

router.post("/api/login", passport.authenticate("local"), function (req, res) {
  console.log(req.user)
  res.json({
    username: req.user.username,
    id: req.user.id,
  });
});


module.exports = router;
