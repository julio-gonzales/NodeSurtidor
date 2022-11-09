const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const { json } = require('express');

module.exports = {

    async getAll( req, res, next){
        try {
            const data = await User.getAll();
            console.log('estamo en la funcion getall');
            console.log(`Usuarios: ${data}`);
            console.log('pasamos bien');
            return res.status(201).json(data);
        } catch (error) {
            console.log('entramos al error');
            console.log(`Error: ${error}`);
            console.log('estamos debolbiendoe el error');
            return res.status(501).json(
                {
                    success: false,
                    message: "error al obtener los usuarios"
                }
            );
        }
    },

    async register(req, res, next) {
        try {
            
            const user = req.body;
            const data = await User.create(user);
            return res.status(201).json({
                success: true,
                message: 'el registro fue exitoso',
                data: data.id
            });


        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'el registro fallo',
                error: error
            });
        }
    },

    async login(req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const myUser = await User.EncontrarPorEmail(email);

            if (!myUser) {
                return res.status(401).json({
                    success: false,
                    message: 'el usuario no fue encontrado'
                });
            } 

            if (User.isPasswordMatched(password, myUser.password)) {
                const token = jwt.sign({id: myUser.id, email: myUser.email},keys.secretOrKey, {
                    //expiresIn: (60*60*24)//1hora
                });
                const data = {
                    id: myUser.id,
                    nombre: myUser.nombre,
                    apellido: myUser.apellido,
                    email: myUser.email,
                    ci: myUser.ci,
                    telefono: myUser.telefono,
                    session_token: `JWT ${token}`
                }
                return res.status(201).json({
                    success: true,
                    data: data,
                    message: 'el usuario entro correctamente'
                });
            } else {
                return res.status(241).json({
                    success: false,
                    message: 'la contra es incorrecta'                    
                });
            }
            

        } catch (error) {
            console.log(`error: ${error}`);
            return res.status(501).json({
                success: false.valueOf,
                message:  'error al momento de logear',
                error: error

            });
        }
    }

};