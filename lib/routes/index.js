const express = require('express');
const router = express.Router();

router.use('/breed', require('./breed'));
router.use('/petdata', require('./petdata'));

module.exports = router;