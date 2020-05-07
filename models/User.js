const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: false
  },
  petIds: {
    type: [Number],
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  address: {
    street: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    state: {
      type: String,
      required: false
    },
    zip: {
      type: Number,
      required: false
    },
    country: {
      type: String,
      required: false
    }
  }
});

// User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);