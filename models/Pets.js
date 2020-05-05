let mongoose = require("mongoose");

const Schema = mongoose.Schema;
 
const Pets = new Schema({
    pet_name: {
        type: String,
        required: true,
        trim: true,
      },
      micro_num: {
        type: Number,
        required: true
      }
});

module.exports = mongoose.model('Pets', Pets);