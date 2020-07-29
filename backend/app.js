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

//  CORS

// Añadir prefijo a rutas - Cargar Rutas
app.use('/api/', articleRoutes);

// Exportar Módulo (Archivo actual)
module.exports = app;