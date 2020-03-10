const Breed = require('../models/Breed');


module.exports = {
  showDogs: (req, res) => {
    Breed.find({})
      .then(Breed => {
        res.json(Breed)
      })
  },
  showDogBreed: (req, res) => {
    Breed.find({breedname: req.params.breedname})
      .then(Breed => {
        res.json(Breed)
      })
  }
}