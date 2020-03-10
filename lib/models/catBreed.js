const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const catBreed = new Schema({
  breedName: String,
  Adaptability: Number,
  "All Around Friendliness": Number,
  "Exercise Needs": Number,
  "Health Grooming": Number,
  Trainability: Number,
  "Adapts Well to Apartment Living": Number,
  "Affectionate with Family": Number,
  "Amount Of Shedding": Number,
  "Dog Friendly": Number,
  "Drooling Potential": Number,
  "Easy To Groom": Number,
  "Easy To Train": Number,
  "Energy Level": Number,
  "Exercise Needs": Number,
  "Friendly Toward Strangers": Number,
  "General Health": Number,
  "Good For Novice Owners": Number,
  "Incredibly Kid Friendly Dogs": Number,
  Intelligence: Number,
  Intensity: Number,
  "Potential For Mouthiness": Number,
  "Potential For Playfulness": Number,
  "Potential For Weight Gain": Number,
  "Prey Drive": Number,
  "Sensitivity Level": Number,
  Size: Number,
  "Tendency To Bark Or Howl": Number,
  "Tolerates Being Alone": Number,
  "Tolerates Cold Weather": Number,
  "Tolerates Hot Weather": Number,
  "Wanderlust Potential": Number
});

module.exports = mongoose.model("catBreed", catBreed);
