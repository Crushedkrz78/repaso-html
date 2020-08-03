'use strict'

// Cargar Modulos de Node para crear Servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar Express (http)
var app = express();

// Cargar Archivos y rutas
var articleRoutes = require('./routes/article');

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Añadir prefijo a rutas - Cargar Rutas
app.use('/api/', articleRoutes);

// Exportar Módulo (Archivo actual)
module.exports = app;