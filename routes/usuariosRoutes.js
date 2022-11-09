const usuariosControllers = require('../controllers/usuariosControllers');
const UsersController = require('../controllers/usuariosControllers');


module.exports = (app) => {
    app.get('/api/users/getAll', usuariosControllers.getAll);
}