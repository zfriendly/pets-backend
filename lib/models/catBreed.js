const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const catBreed = new Schema({
  breedName: String,
  "Affectionate with Family": String,
  "Amount of Shedding": String,
  "Easy to Groom": String,
  "Friendly Toward Strangers": String,
  "General Health": String,
  Intelligence: String,
  "Kid Friendly": String,
  "Pet Friendly": String,
  "Potential for Playfulness": String,
  "Tendency to Vocalize": String
});

module.exports = mongoose.model("catBreed", catBreed);
