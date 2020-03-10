const express = require('express');
const router = express.Router();
const petdataController = require('../controllers/petdata.');

router.get('/pets', petdataController.index);
router.get('/pets/:name', petdataController.showPet);
router.post('/pets', petdataController.create);
router.put('/pet/:id', petdataController.edit);
router.delete('/pet/:id', petdataController.delete);

module.exports = router