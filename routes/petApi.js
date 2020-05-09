const router = require("express").Router();
const db = require("../models");

router.get("/api/pets", function (req, res) {
  console.log("REACHED API/PETS");
  console.log("req.user:", req.user);
  db.Pets.find({
    ownerId: req.user._id,
  })
    .then((pets) => {
      res.status(200).json(pets);
    })
    .catch((err) => console.log(err));
});

router.post("/api/add", function (req, res) {
  console.log("REACHED API/add");
  console.log("req.body:", req.body);
  console.log("req.user:", req.user);
  console.log("req.user._id", req.user._id);
  console.log("req.user.id", req.user.id);

  let newPet = {
    petName: req.body.petName,
    microNum: req.body.microNum,
    species: req.body.species,
    ownerId: req.user._id,
  };
});

module.exports = router;
