'use strict'
var validator = require('validator');
//var Article = require('../models/article');

var controller = {
    // 
    datosCurso: (req, res) => {
        var hola = req.body.hola;
    
        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            autor: 'Victor Robles Web',
            url: 'victorroblesweb.es',
            hola
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la accion Test de mi controlador de articulos'
        })
    },

    save: (req, res) => {
        // Recoger parámetros por POST
        var params = req.body;
        //console.log(params);

        //Validar Datos con librería (Validator)
        try{
            //
            var validateTitle = !validator.isEmpty(params.title);
            var validateContent = !validator.isEmpty(params.content);
        }catch(err){
            return res.status(200).send({
                message: 'Faltan datos por enviar'
            });
        }

        if(validateTitle && validateContent){
            return res.status(200).send({
                message: 'Validacion Correcta'
            })
        

            //Crear objeto a guardar

            //Asignar valores a objeto

            //Guardar artículo

            //Devolver una respuesta
            return res.status(200).send({
                article: params
            })
        }else{
            return res.status(200).send({
                message: 'Los datos no son validos'
            });
        }
    }
}; //End Controller

module.exports = controller;