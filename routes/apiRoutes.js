const router = require("express").Router();
const db = require("../models");
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
// const isAuthenticated = require("../config/middleware/isAuthenticated");

const signToken = userID => {
  return JWT.sign({
    iss: "swonelord",
    sub: userID
  }, "swonebean9000", { expiresIn: "1h" });
}


// USER SIGN-UP ROUTE
router.post('/signup', (req, res) => {
  const { username, password, isAdmin, key } = req.body;
  db.User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
    } else if (user) {
      res.status(400).json({ message: { msgBody: "Username already exists", msgError: true } });
    } else if (!isAdmin) {
      const newUser = new db.User({ username, password, isAdmin });
      newUser.save(err => {
        if (err) {
          res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
        } else {
          res.status(201).json({ message: { msgBody: "Account successfully created", msgError: false } });
        }
      });
    } else {
      console.log('given key: ', key);
      db.adminkeys.findOne({ key }, (err, key) => {
        if (err) {
          res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
        } else if (!key) {
          res.status(400).json({ message: { msgBody: "Invalid key", msgError: true } });
        } else {
          console.log('admin key matches');
          const newUser = new db.User({ username, password, isAdmin });
          newUser.save(err => {
            if (err) {
              res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
            } else {
              res.status(201).json({ message: { msgBody: "Account successfully created", msgError: false } });
            }
          });
        }
      });
    }
  });
});

// PASSPORT AUTHENTICATION ROUTE

router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  if (req.isAuthenticated()) {
    const { _id, username, isAdmin, petIds, phone, email, street, city, state, zip } = req.user;
    const token = signToken(_id);
    res.cookie('access_token', token, { httpOnly: true, sameSite: true });
    res.status(200).json({ isAuthenticated: true, user: { username, isAdmin, petIds, phone, email, street, city, state, zip } });
  }
});

router.get('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.clearCookie('access_token');
  res.json({ user: { username: "", role: "" }, success: true });
});

router.post("/api/userUpdate", passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('/api/userUpdate req.body: ', req.body);
  const fieldToUpdate = req.body;
  db.User.findByIdAndUpdate(
    { _id: req.user._id },
    fieldToUpdate,
    { new: true }
  )
    .then((result) => {
      console.log('result of findoneandupdate: ', result);
      res.status(200).json(result);
    })
    .catch(function (err) {
      res.json(err);
    });
});

// router.post("/api/replies/", (req, res) => {
//   db.Reply.create(req.body).then(results => {
//     res.json(results);
//   });
// });

// custom authentication route
router.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('inside /authenticated');
  const { petIds, username, phone, email, street, city, state, zip, isAdmin } = req.user;
  res.status(200).json({ isAuthenticated: true, user: { petIds, username, phone, email, street, city, state, zip, isAdmin } });
});

module.exports = router;
