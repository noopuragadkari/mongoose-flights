var express = require('express');
var router = express.Router();

// controllers = business logic
const  flightCtrl = require('../controllers/flights');

// if user visits http://localhost:3000/flights/new
router.get('/new', flightCtrl.new);


router.post('/', flightCtrl.create);

// http://localhost:3000/flights/index
router.get('/', flightCtrl.index);

router.get('/:id', flightCtrl.show);

module.exports = router;
