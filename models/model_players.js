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