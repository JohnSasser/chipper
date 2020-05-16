const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const passportLocalMongoose = require('passport-local-mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: false,
    trim: true
  },
  body:{
      type: String,
      required: false,
      trim: true
  }
});

// User.plugin(passportLocalMongoose);


module.exports = mongoose.model("Post", postSchema);
