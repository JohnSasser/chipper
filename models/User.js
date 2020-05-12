const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
// const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: false,
  },
  key: {
    type: String,
    required: false
  },
  petIds: {
    type: [Number],
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  street: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  zip: {
    type: Number,
    required: false,
  }
});

// User.plugin(passportLocalMongoose);
User.methods.verifyPassword = function (password, callback) {
  callback(err, bcrypt.compareSync(password, this.password));
};

module.exports = mongoose.model("User", User);
