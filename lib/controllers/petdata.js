const Pet = require('../models/Pet');



module.exports = {
  index: (req, res) => {
    Pet.find({})
      .then(Pet => {
        res.json(Pet)
      })
  },
  showPet: (req, res) => {
    Pet.find({name: req.params.name})
      .then(Pet => {
        res.json(Pet)
      })
  },
  showName: (req, res) => {
    Pet.find({name: req.params.name})
      .then(Pet => {
        res.json(Pet)
      })
  },
  create: (req, res) => {
    Pet.create(req.body)
      .then(Pet => {
        res.json(Pet)
      })
  },
  edit: (req, res) => {
    Pet.findOneAndUpdate({id: req.params.id}, req.body)
      .then(Pet => {
        res.json(Pet)
      })
  },
  delete: (req, res) => {
    Pet.findOneAndDelete({id: req.params.id})
      .then(Pet => {
        res.json(Pet)
      })
  }
}


// router.get('/pets', petdataController.index);
// router.get('/pets/:name', petdataController.showPet);
// router.post('/pets', petdataController.create);

// router.post('/pet/:id', petdataController.edit);
// router.delete('/pet/:id', petdataController.delete);