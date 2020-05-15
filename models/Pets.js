let mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema({
  petName: {
    type: String,
    required: true,
    trim: true,
  },
  microNum: {
    type: Number,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: false
  },
  ownerId: {
    type: String,
    required: true
  },
  petImageURL: {
    type: String,
    required: false
  }
});

const Pets = mongoose.model("Pets", petSchema);

module.exports = Pets;
