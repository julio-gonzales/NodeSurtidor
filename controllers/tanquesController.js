const Tanque = require('../models/tanque.js');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const { json } = require('express');


module.exports = {
    
    async getAll( req, res, next){
        try {
            const data = await Tanque.getAll();
            return res.status(201).json(data);
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json(
                {
                    success: false,
                    message: "error al obtener los usuarios"
                }
            );
        }
    },

    async getNombre(req, res, next){
        try {
            const nombre = req.body.nombre;
            const myTanque = await Tanque.EncontrarPorNombre(nombre);

            if (!myTanque) {
                return res.status(401).json({
                    success: false,
                    message: 'el tanqur no fue encontrado'
                })
            } else {
                const data = {
                    id: myTanque.id,
                    nombre: myTanque.nombre,
                    codigo: myTanque.codigo,
                    
                }
            }

        } catch (error) {
            console.log(`error: ${error}`);
            return res.status(501).json({
                success: false.valueOf,
                message:  'no se encontro el id',
                error: error

            });
        }
    }
};