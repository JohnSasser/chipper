const router = require("express").Router();
const db = require("../models");
const passport = require('passport');

router.get("/api/pets", passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('req.user inside /api/pets: ', req.user);
  db.Pets.find({
    ownerId: req.user._id,
  })
    .then((pets) => {
      res.status(200).json(pets);
    })
    .catch((err) => console.log(err));
});

router.post("/api/add", passport.authenticate('jwt', { session: false }), (req, res) => {
  let newPet = {
    petName: req.body.petName,
    microNum: req.body.microNum,
    species: req.body.species,
    ownerId: req.user._id,
    petImageURL: req.body.petImageURL
  };

  db.Pets.insertMany(newPet, (err, result) => {
    console.log("reached inside model");
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

module.exports = router;
