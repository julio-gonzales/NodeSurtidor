const db = require('../config/config.js');
const crypto = require('crypto');
const { callbackify } = require('util');

const User = {};


User.getAll = () => {
    const sql =  `SELECT * FROM usuario`;
    return db.manyOrNone(sql);
}

User.EncontrarPorEmail = (email) => {
    const sql = `
    select id, 
    email, 
    nombre, 
    apellido, 
    telefono, 
    foto, 
    password, 
    session_token
    from usuario
    where email = $1;`
    return db.oneOrNone(sql, email);
}

User.encontrarPorId = (id, callback) => {
    const sql = `
    select id, 
    email, 
    nombre, 
    apellido, 
    telefono, 
    foto, 
    password, 
    session_token
    from usuario
    where id = $1;`

    return db.oneOrNone(sql, id).then(user => {callback(null, user);});
}

User.create = (user) => {

    const myPasswordHashed = crypto.createHash('md5').update(user.password).digest('hex');
    user.password = myPasswordHashed;
    const sql = `INSERT INTO usuario(
        email,
        nombre,
        apellido,
        telefono,
        password,
        foto,
        created_at,
        updated_at
    )VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`;

    return db.oneOrNone(sql, [
        user.email,
        user.nombre,
        user.apellido,
        user.telefono,
        user.password,
        user.foto,
        new Date(),
        new Date()

    ]);
}

User.isPasswordMatched = (userPassword, hash) => {
    const myPasswordHashed = crypto.createHash('md5').update(userPassword).digest('hex');
    if (myPasswordHashed === hash) {
        return true;
    }

    return false;
}

module.exports = User;