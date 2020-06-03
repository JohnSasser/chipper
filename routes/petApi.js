const router = require("express").Router();
const db = require("../models");
const passport = require('passport');

router.get("/api/pets", passport.authenticate('jwt', { session: false }), (req, res) => {
  db.Pets.find({
    ownerId: req.user._id,
  })
    .then((pets) => {
      res.status(200).json(pets);
    })
    .catch((err) => console.log(err));
});

router.post("/api/add", passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('user in /api/add: ', req.user);
  const userId = req.user._id;
  const newPet = new db.Pets({
    petName: req.body.petName,
    microNum: req.body.microNum,
    species: req.body.species,
    ownerId: req.user._id,
    petImageURL: req.body.petImageURL
  });
  newPet.save((err, addedPet) => {
    console.log('result in /api/add: ', addedPet);
    // console.log("reached inside model");
    if (err) {
      res.send(err);
    } else {
      // console.log(result);
      // addedPet._id
      db.User.findByIdAndUpdate(userId, { $push: { pets: addedPet } }, { useFindAndModify: false }, result => {
        console.log('result in User.updateOne: ', result);
        res.send(addedPet);
      });
    }
  })
});

module.exports = router;
