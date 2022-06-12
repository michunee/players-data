const db = require('../models/database');
const playersModel = require('../models/model_players');

const showPlayers = async(req, res) => {
    let dataPlayer = await playersModel.listPlayers();
    res.render('home', { dataPlayer : dataPlayer });
}

const addPlayersForm = async(req, res) => {
    res.render('addPlayerForm');
}

const addnewPlayer = async(req, res) => {
    let {name, age, email, address} = req.body;
    if (name == '' || age == '' || email == '' || address == '') {
        res.redirect('/add-player');
    }
    else  {
        let dataPlayer = await playersModel.addPlayer(name, age, email, address);
        res.redirect('/');
    }
}   

const deletePlayer = async(req, res) => {
    let id = req.params.id;
    let dataPlayer = await playersModel.deletePlayer(id);
    res.redirect('/');
}

const detailPlayer = async(req, res) => {
    let id = req.params.id;
    let dataPlayer = await playersModel.detailPlayer(id);
    res.render('detailPlayerForm', { dataPlayer : dataPlayer });
}

const addeditPlayer = async(req, res) => {
    let id = req.params.id;
    let dataPlayer = await playersModel.detailPlayer(id);
    res.render('editPlayerForm', { dataPlayer : dataPlayer });
}

const editPlayer = async(req, res) => {
    let {id, name, age, email, address} = req.body;
    let dataPlayer = await playersModel.editPlayer(id, name, age, email, address);
    res.redirect('/');
}

module.exports = {
    showPlayers,
    addPlayersForm,
    addnewPlayer,
    deletePlayer,
    detailPlayer,
    addeditPlayer,
    editPlayer
}