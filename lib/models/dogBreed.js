const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const dogBreed = new Schema({
  breedName: String,
  Adaptability: String,
  "All Around Friendliness": String,
  "Exercise Needs": String,
  "Health Grooming": String,
  Trainability: String,
  "Adapts Well to Apartment Living": String,
  "Affectionate with Family": String,
  "Amount Of Shedding": String,
  "Dog Friendly": String,
  "Drooling Potential": String,
  "Easy To Groom": String,
  "Easy To Train": String,
  "Energy Level": String,
  "Friendly Toward Strangers": String,
  "General Health": String,
  "Good For Novice Owners": String,
  "Incredibly Kid Friendly Dogs": String,
  Intelligence: String,
  Intensity: String,
  "Potential For Mouthiness": String,
  "Potential For Playfulness": String,
  "Potential For Weight Gain": String,
  "Prey Drive": String,
  "Sensitivity Level": String,
  Size: String,
  "Tendency To Bark Or Howl": String,
  "Tolerates Being Alone": String,
  "Tolerates Cold Weather": String,
  "Tolerates Hot Weather": String,
  "Wanderlust Potential": String
});

module.exports = mongoose.model("dogBreed", dogBreed);
