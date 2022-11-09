const tanquesController = require('../controllers/tanquesController.js');



module.exports = (app) => {
    app.get('/api/tanques/getAll', tanquesController.getAll);

    //app.post('/api/users/create', UsersController.register);
    //app.post('/api/users/login', UsersController.login);
}