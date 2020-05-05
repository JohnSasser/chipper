let db = require("../models");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chipperdb", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let petSeed = [
    {
        pet_name: "Woofy",
        micro_num: 123,
    },
    {
        pet_name: "Barky",
        micro_num: 124,
    },
    {
        pet_name: "Crazyeyes",
        micro_num: 321,
    },
    {
        pet_name: "Smellyface",
        micro_num: 524,
    },
    {
        pet_name: "Goatlord",
        micro_num: 235,
    },
    {
        pet_name: "Chippy",
        micro_num: 132,
    }
];

db.Pets.deleteMany({})
    .then(() => db.Pets.collection.insertMany(petSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });