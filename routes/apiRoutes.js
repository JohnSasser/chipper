const router = require("express").Router();
const db = require("../models");
const passport = require("passport");

// USER SIGN-UP ROUTE
router.post("/api/signup", function (req, res) {
  console.log(req.body);
  // const encryptedPass = bcrypt(req.body.password)
  // console.log("encrypted password:", encryptedPass)
  db.User.create({
    isAdmin: req.body.isAdmin,
    username: req.body.username,
    password: req.body.password,
    phone: req.body.phone,
    email: req.body.email,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  })
    .then(function (result) {
      console.log("apiRoutes /signup .create(", result, ")");
      res.status(200).json(result);
    })
    .catch(function (err) {
      console.log(err);
      res.json(err);
    });
});

// PASSPORT AUTHENTICATION ROUTE
router.post("/api/login", passport.authenticate("local"), function (req, res) {
  console.log("1", req.user);
  res.json({
    user: {
      ...req.user._doc,
      password: null
    },
    username: req.user.username,
    id: req.user.id,
    isAdmin: req.user.isAdmin
  });
});

router.post("/api/userupdate", function (req, res) {
  db.User.findByIdAndUpdate({ _id: req.body.user },
    {
      email: req.body.newInfo.newEmail,
      phone: req.body.newInfo.newPhone
    })
    .then(result => {
      console.log(res)
      res.status(200).json(result)
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
})
module.exports = router;
