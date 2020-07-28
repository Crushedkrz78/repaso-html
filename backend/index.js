'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

// Plantilla de inicializacion para objeto de conexión a Mongose
// mongoose.connect(url, opciones).then(() => {});
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', {useNewUrlParser: true})
        .then(() => {
            console.log('La conexión a la DB se ha realizado correctamente');

            // Crear Servidor y escuchar peticiones HTTP
            app.listen(port, () => {
                console.log('Servidor Corriendo en http://localhost:'+port);
            });
        });