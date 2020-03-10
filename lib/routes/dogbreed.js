const express = require("express");
const router = express.Router();
const breedController = require("../controllers/dogbreed");
console.log(breedController.index());

router.get("/dogs", breedController.showDogs);
router.get("/dogs/:breedname", breedController.showDogBreed);


module.exports = router;