var router = require('express').Router();
const db = require('../models')


// respond with "hello world" when a GET request is made to the homepage;
router.post('/api/tester', function (req, res) {
    console.log(req.body)
  // res.send('hello world')

  db.User.create({
    userName: req.body.username,
    password: req.body.password
  })
    .then(function(result) {
      console.log(result.email);
      // res.render("login");
      // dedirect to a route, so addd the slash
      // res.redirect("/login");
      res.status(200).json(result);
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
})

module.exports = router;