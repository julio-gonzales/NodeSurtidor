const db = require('../config/config.js');
//const crypto = require('crypto');
const { callbackify } = require('util');

const Tanque = {};

Tanque.getAll = () => {
    const sql =  `SELECT * FROM tanque`;
    return db.manyOrNone(sql);
}

module.exports = Tanque;