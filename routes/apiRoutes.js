const router = require("express").Router();
const db = require("../models");
const passport = require("passport");

// password encryption

function requireAdmin() {
  return function (req, res, next) {
    db.User.findOne(req.body.username, function (err, user) {
      if (err) {
        return next(err);
      }

      if (!user) {
        // Do something - the user does not exist
        console.log(`no user condition - apiRoutes`);
      }

      if (!user.isAdmin) {
        // Do something - the user exists but is not admin user
        console.log(`not user.admin - apiRoutes`)
      }

      // Hand over control to passport
      next();
    });
  };
}

// respond with "hello world" when a GET request is made to the homepage;
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

// router.post('/url', someFunction, callback)
// authentication for passport route

router.post("/login", requireAdmin(), passport.authenticate("local"), function (
  req,
  res
) {
  console.log(res, "admin passport auth apiRoutes.js")
  res.redirect("/Admin");
});

router.post("/api/login", passport.authenticate("local"), function (req, res) {
  console.log(req.user);
  res.json({
    username: req.user.username,
    id: req.user.id,
  });
});

module.exports = router;
