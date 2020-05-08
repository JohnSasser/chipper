const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
// const passportLocalMongoose = require('passport-local-mongoose');

const Admin = new Schema({
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
    required: true,
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
Admin.methods.verifyPassword = function (password, callback) {
  callback(err, bcrypt.compareSync(password, this.password));
};

module.exports = mongoose.model("Admin", Admin);
