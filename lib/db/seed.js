const Pet = require("../models/Pet.js");
const Breed = require("../models/Breed.js");
const petData = require("./petData.json");
const breeds = require("./breeds.json");

Pet.deleteMany({}).then(() => {
  Pet.create(petData).then(petData => {
    console.log();
    process.exit();
  });
});

Breed.deleteMany({}).then(() => {
  Breed.create(petData).then(breeds => {
    console.log();
    process.exit();
  });
});
