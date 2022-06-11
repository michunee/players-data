var express = require('express');
var router = express.Router();
const playersController = require('../controllers/players');

/* GET home page. */
router.get('/', playersController.showPlayers);
router.get('/add', playersController.showPlayers);

module.exports = router;
