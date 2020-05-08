const router = require("express").Router();
const db = require("../models");

router.get('/api/pets', function (req, res) {
    console.log("REACHED API/PETS", req);
    db.Pets.find()
        .then(pets => {
            res.status(200).json(pets);
        })
        .catch(err => console.log(err));
});

router.post('/api/add', function (req, res) {
    console.log("REACHED API/add");

    let newPet = {
        petName: req.body.petName,
        microNum: req.body.microNum,
        species: req.body.species
    }

    db.Pets.insertMany(newPet, (err, result) => {
        console.log("reached inside model")
        if (err) {
            res.send(err);
        } else {
            console.log(result);
            res.send(result);
        }
    })
})

module.exports = router;

