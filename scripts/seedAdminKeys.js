let db = require("../models");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chipperdb", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let adminkeys = [
    {
        key: "asdffdsa",
        expired: false,
    },
    {
        key: "zxcvvcxz",
        expired: false,
    },
    {
        key: "qwerrewq",
        expired: false,
    },
    {
        key: "lkjhhjkl",
        expired: false,
    },
    {
        key: "poiuuiop",
        expired: false,
    },
    {
        key: "mnbvvbnm",
        expired: false,
    }
];

db.adminkeys.deleteMany({})
    .then(() => db.adminkeys.collection.insertMany(adminkeys))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

    