const express = require("express");
const parser = require("body-parser");
const app = express();
var cors = require('cors');
const dogBreed = require("./models/dogBreed");
const catBreed = require("./models/catBreed");
const Pet = require("./models/Pet")

app.use(parser.json());
app.use(cors());

//BREEDS
app.get("/dogs", function(req, res) {
  dogBreed.find({}).then(Breed => {
    res.json(Breed);
  });
});

app.get("/dogs/:breedName", function(req, res) {
  dogBreed.find({ breedName: {$regex: req.params.breedName} }).then(Breed => {
    res.json(Breed);
  });
});

app.get("/cats", function(req, res) {
  catBreed.find({}).then(Breed => {
    res.json(Breed);
  });
});

app.get("/cats/:breedName", function(req, res) {
  catBreed.find({ breedName: {$regex: req.params.breedName} }).then(Breed => {
    res.json(Breed);
  });
});





//PETS

app.get("/pets", function(req, res) {
  Pet.find({}).then(pets => res.json(pets));
});

app.get("/pets/:name", function(req, res) {
  Pet.find({ name: req.params.name }).then(pets => res.json(pets));
});

app.post("/pets", function(req, res) {
  Pet.create(req.body).then(pet => {
    res.json(pet);
  });
});

app.put("pet/:id", function(req, res) {
  Pet.findOneAndUpdate({ id: req.params.id }, req.body).then(Pet => {
    res.json(Pet);
  });
});

app.delete("pet/:id", function(req, res) {
  Pet.findOneAndDelete({ id: req.params.id }).then(Pet => {
    res.json(Pet);
  });
});

app.listen(3000, () => console.log("listening on port 3000"));
