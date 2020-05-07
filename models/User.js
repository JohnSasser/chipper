const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');
 
const User = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
      },
      password: {
        type: String,
        required: true
      }
});
 
// User.plugin(passportLocalMongoose);

// userSchema.methods.verifyPassword = function(password, callback) {
//   callback(err, bcrypt.compareSync(password, this.password));
// };
 
module.exports = mongoose.model('User', User);