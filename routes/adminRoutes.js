const router = require("express").Router();
const db = require("../models");
const passport = require("passport");

// respond with "hello world" when a GET request is made to the homepage;
router.post("/api/signup", function (req, res) {
  console.log(req.body);
  db.Admin.findOne({
    username: "Admin",
    password: "Admin",
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

router.post("/api/login", passport.authenticate("local"), function (req, res) {
  console.log(req.user);
  if (req.user === "Admin") {
    // Figure out how to use admin model
    res.json({
      username: "Admin"
    })
  } else
    // Use User Database
    res.json({
      username: req.user.username,
      id: req.user.id,
    });
});

router.post("/api/search", function (req, res) {
  console.log("REACHED API/adminpets");
  db.Pets.findOne({ petName: req.body.petName })
    .then(pet => {
      console.log(pet)
      res.status(200).json(pet);
    })
    .catch(err => console.log(err));
})

module.exports = router;