const Breed = require('../models/Breed');


module.exports = {
  index: (req, res) => {
    Breed.find({})
      .then(Breed => {
        res.json(Breed)
      })
  },
  showYear: (req, res) => {
    Breed.find({year: req.params.year})
      .then(Breed => {
        res.json(Breed)
      })
  },
  showName: (req, res) => {
    Breed.find({name: req.params.name})
      .then(Breed => {
        res.json(Breed)
      })
  }
}
