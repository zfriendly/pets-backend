const express = require("express");
const router = express.Router();
const breedController = require("../controllers/breed");
console.log(breedController.index());

router.get("/dogs", breedController.showDogs);
router.get("/cats", breedController.showCats);
router.get("/dogs/:breedname", breedController.showDogBreed);
router.get("/cats/:breedname", breedController.showCatBreed);


module.exports = router;