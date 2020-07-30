'use strict'
var validator = require('validator');
var Article = require('../models/article');

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
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if(validateTitle && validateContent){        

            //Crear objeto a guardar
            var article = new Article();

            //Asignar valores a objeto
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            /* return res.status(200).send({
                status: 'success',
                article
            }); */

            //Guardar artículo
            article.save((err, articleStored) => {
                if(err || !articleStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El artículo no se ha guardado'
                    });
                }
                //Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                });
            });

            

            
        }else{
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            });
        }
        
    }
}; //End Controller

module.exports = controller;