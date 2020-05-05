const router = require('express').Router();
const db = require('../models')
// password encryption
const md5 = require('md5');


// respond with "hello world" when a GET request is made to the homepage;
router.post('/api/tester', function (req, res) {
    console.log(req.body)
  // res.send('hello world')
  const encryptedPass = md5(req.body.password)
  console.log("encrypted password:", encryptedPass)
  db.User.create({
    userName: req.body.username,
    password: encryptedPass,
  })
    .then(function(result) {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
})

module.exports = router;