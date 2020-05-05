let mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema({
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

const Pets = mongoose.model("Pets", petSchema);

module.exports = Pets;