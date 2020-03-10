const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const catBreed = new Schema({
  breedName: String,
  "Affectionate with Family": Number,
  "Amount of Shedding": Number,
  "Easy to Groom": Number,
  "Friendly Toward Strangers": Number,
  "General Health": Number,
  Intelligence: Number,
  "Kid Friendly": Number,
  "Pet Friendly": Number,
  "Potential for Playfulness": Number,
  "Tendency to Vocalize": Number
});

module.exports = mongoose.model("catBreed", catBreed);
