const express = require("express");
const router = express.Router();
const breedController = require("../controllers/catbreed");
console.log(breedController.index());


router.get("/cats", breedController.showCats);
router.get("/cats/:breedname", breedController.showCatBreed);


module.exports = router;