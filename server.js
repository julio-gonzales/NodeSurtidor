const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');


/**
 * rutas
 */
const users = require('./routes/usersRoutes');
const tanques = require('./routes/tanquesRoutes');

const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powered-by');
app.set('port',port);


/**
 * llamando a las rutas
 */
users(app);
tanques(app);

server.listen(3000, '192.168.0.15' || 'localhost', function() {
    console.log('aplicacion de nodejs ' + port + ' iniciada')
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});

app.get('/test', (req, res) => {
    res.send('Ruta del test');
});
//error handler

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});


module.exports = {
    app: app, 
    server: server 
}
//los valores que puede retornar el GET
/**
 * 200 respuesta exitosa
 * 404 error de pagina no existe/significa que la url no existe
 * 500 error interno del servidor
 */