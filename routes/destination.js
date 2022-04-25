const express = require('express');
const router = express.Router();

var destinationCtrl = require('../controllers/destination');

//POST /movies/:id/reviews
router.post('/flights/:id/destination',destinationCtrl.create)

module.exports = router;