const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const passportLocalMongoose = require('passport-local-mongoose');

const adminkeys = new Schema({
  key: {
    type: String,
    required: false,
    trim: true
  },
  expired: {
    type: Boolean,
    default: false,
    required: true
  },
});

// User.plugin(passportLocalMongoose);


module.exports = mongoose.model("adminkeys", adminkeys);
