const router = require("express").Router();
const db = require("../models");
const passport = require("../config");
// const isAuthenticated = require("../config/middleware/isAuthenticated");

// USER SIGN-UP ROUTE
router.post("/api/signup", function (req, res, next) {
  // console.log(req.body);
  passport.authenticate("local-signup", (error, user, newInfo) => {
    console.log("apiRoutes.js / error:", error, "apiRoutes.js / user:", user);
    if (error) {
      console.log('in the err block /api/signup')
      return res.status(500).json(error);
      console.log('after the res.status 500 apiRoutes.js')
    } else {
    console.log('above the res.json(user) /api/signup')
      return res.json(user);
    }
  })(req, res, next);
});

// PASSPORT AUTHENTICATION ROUTE
router.post("/api/login", passport.authenticate("local"), function (req, res) {
  console.log("1", req.user);
  res.json({
    user: {
      ...req.user._doc,
      password: null,
    },
    username: req.user.username,
    id: req.user.id,
    isAdmin: req.user.isAdmin,
  });
});

router.post("/api/userUpdate", function (req, res) {
  console.log(req.body.user);
  db.User.findByIdAndUpdate(
    { _id: req.body.user },
    {
      email: req.body.newInfo.email,
      phone: req.body.newInfo.phone,
      street: req.body.newInfo.street,
      city: req.body.newInfo.city,
      state: req.body.newInfo.state,
      zip: req.body.newInfo.zip,
    }
  )
    .then((result) => {
      console.log(res);
      res.status(200).json(result);
    })
    .catch(function (err) {
      console.log(err);
      res.json(err);
    });
});

// router.post("/api/replies/", (req, res) => {
//   db.Reply.create(req.body).then(results => {
//     res.json(results);
//   });
// });

// custom authentication route
router.get("/api/authenticate", function (req, res) {
  if (req.user) res.json(true);
  else res.json(false);
});

module.exports = router;
