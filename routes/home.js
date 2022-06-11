var express = require('express');
var router = express.Router();
const playersController = require('../controllers/players');

/* GET home page. */
router.get('/', playersController.showPlayers);
router.get('/add-player', playersController.addPlayersForm);
router.post('/add-player', playersController.addnewPlayer);
router.get('/delete-player/:id', playersController.deletePlayer);

module.exports = router;
