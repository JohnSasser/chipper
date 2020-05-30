const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
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
  key: {
    type: String,
    required: false,
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
  },
});

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
      return next();
  }
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
      if (err) {
          return next(err);
      }
      this.password = passwordHash;
      next();
  });
});

UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
      if (err) {
          return cb(err);
      } else if (!isMatch) {
          return cb(null, isMatch)
      } else {
          return cb(null, this);
      }

  });
};

module.exports = mongoose.model("User", UserSchema);
