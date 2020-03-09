const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Pet = new Schema({
  type: String,
  petName: String,
  age: Number,
  breed: String,
  image: String,
  numberOfLikes: Number,
  caption: String
});

module.exports = mongoose.model("Pet", Pet);
