const router = require("express").Router();
const db = require("../models");
const passport = require("passport");

// ADMIN SIGN-UP ROUTE
router.post("/api/admin-sign-up", function (req, res) {
    console.log(req.body, "line 8 apiRoutes.js");
    db.adminkeys
      .findOne({
        key: req.body.key,
      })
      .then((result) => {
        if (result === null || result.expired == true) {
          res.status(401).send(result);
        }
        console.log(result, "result line 12 apiRoutes.js");
        db.adminkeys
          .updateOne({ key: result.key }, { expired: true })
          .then(
            // res.redirect("/adminPage"));
            res.status(200).send(result));
      })
      .catch((err) => {
        console.log(err);
      });
});

// LOGIN ADMIN-CHECK GET ROUTE
// router.post("/api/admin-check", (req, res) => {
//     console.log("req", req.body)
//     db.User.findOne({
//         username: req.body.username,
//     }).then((result) => {
//         console.log("admin-check admRoutes.js line: 34", result)
//         if (result.isAdmin === true) {
//           res.status(200).send(result)
//         } else res.status(401).send(result)
//     }).catch(err => console.log(err))
// });

// 
router.post("/api/search", function (req, res) {
  console.log("REACHED API/adminpets");
  db.Pets.findOne({ microNum: req.body.microNum })
    .then(pet => {
      console.log(pet)
      res.status(200).json(pet);
    })
    .catch(err => console.log(err));
})

module.exports = router;