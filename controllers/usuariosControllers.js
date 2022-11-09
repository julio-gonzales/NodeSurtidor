const { getAll } = require('../models/user');
const User = require('../models/user');

module.exports = {

    async getAll( req, res, next){
        try {
            const data = await User.getAll();
            console.log('estamo en la funcion getall');
            console.log(`Usuarios: ${data}`);
            console.log('pasamos bien');
            return res.Status(201).json(data);
        } catch (error) {
            console.log('entramos al error');
            console.log(`Error: ${error}`);
            console.log('estamos debolbiendoe el error');
            return res.Status(501).json(
                {
                    success: false,
                    message: "error al obtener los usuarios"
                }
            );
        }
    }

};