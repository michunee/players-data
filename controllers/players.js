const db = require('../models/database');
const playersModel = require('../models/model_players');

const showPlayers = async(req, res) => {
    let dataPlayer = await playersModel.listPlayers();
    res.render('home', { dataPlayer : dataPlayer });
}

module.exports = {
    showPlayers
}