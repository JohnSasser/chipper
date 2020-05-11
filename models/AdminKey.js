const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const passportLocalMongoose = require('passport-local-mongoose');

const AdminKey = new Schema({
  key: {
    type: Number,
    required: false
  },
  expired: {
    type: Boolean,
    default: false,
    required: true
  },
});

// User.plugin(passportLocalMongoose);


module.exports = mongoose.model("AdminKey", AdminKey);
