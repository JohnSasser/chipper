const router = require('express').Router();
const db = require('../models')
const passport = require('../passport')

// password encryption
const md5 = require('md5');


// respond with "hello world" when a GET request is made to the homepage;
router.post('/api/tester', function (req, res) {
  console.log(req.body)
  // res.send('hello world')
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
})

router.post('/api/user', function (req, res) {
  console.log("req.body: ", req.body)
  db.User.findOne({ userName: req.body.username, password: req.body.password })
    .then(user => {
      console.log("this is a user from the database: ", user)
      res.status(200).json(res)
    })
    .catch(function (err) {
      res.json(err)
      console.log("apiRoutes: ", err)
    })
})


module.exports = router;

