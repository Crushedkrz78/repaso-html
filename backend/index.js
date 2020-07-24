'use strict'

var mongoose = require('mongoose');

// Plantilla de inicializacion para objeto de conexión a Mongose
// mongoose.connect(url, opciones).then(() => {});
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', {useNewUrlParser: true})
        .then(() => {
            console.log('La conexión a la DB se ha realizado correctamente');
        });