const db = require('../models/database');

exports.listPlayers = async() => {
    return new Promise((resolve,reject) => {
        let sql = `SELECT * FROM player`;
        let query = db.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

exports.addPlayer = async(name,age,email,address) => {
    let data = {
        name : name,
        age : age,
        email: email,
        address : address,
    };
    return new Promise((resolve,reject) => {
        let sql = `INSERT INTO player SET ?`;
        let query = db.query(sql, data,(err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

exports.deletePlayer = async(id) => {
    return new Promise((resolve,reject) => {
        let sql = `DELETE FROM player WHERE id = ?`;
        let query = db.query(sql, id,(err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
