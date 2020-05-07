const router = require("express").Router();
const db = require("../models");

router.get('/api/pets', function (req, res) {
    console.log("REACHED API/PETS");
    db.Pets.find()
        .then(pets => {
            res.status(200).json(pets);
        })
        .catch(err => console.log(err));
});

module.exports = router;

