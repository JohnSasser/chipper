let db = require("../models");
let mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://DBadmin:g0atf4c3@ds017185.mlab.com:17185/heroku_7s6d98z5",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

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
  },
];


db.adminkeys
  .deleteMany({})
  .then(() => db.adminkeys.collection.insertMany(adminkeys))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
