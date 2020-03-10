const Pet = require("../models/Pet.js");
const dogBreed = require("../models/dogBreed.js");
const catBreed = require("../models/dogBreed.js");
const petData = require("./petData.json");
const breeds = require("./breeds.json");

let catBreedData = [];

Object.keys(breeds["cat_breeds"]).forEach(breed => {
  catBreedData.push({ ...breeds["cat_breeds"][breed], breedName: breed });
});

let dogBreedData = [];

Object.keys(breeds["dog_breeds"]).forEach(breed => {
  dogBreedData.push({ ...breeds["dog_breeds"][breed], breedName: breed });
});

// Pet.deleteMany({}).then(() => {
//   Pet.create(petData).then(pets => {
//     console.log(pets);
//     process.exit();
//   });
// });

Breed.deleteMany({}).then(() => {
  Breed.create(dogBreedData).then(breeds => {
    console.log(breeds);
  });
});
console.log(dogBreedData);
