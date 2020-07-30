'use strict'
var validator = require('validator');
var Article = require('../models/article');

var controller = {
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

        //Validar Datos con librería (Validator)
        try{
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
    },

    getArticles: (req, res) => {
        var query = Article.find({});
        //Obtener el ultimo objeto
        var last = req.params.last;
        //console.log(last);
        if(last || last != undefined){
            query.limit(5);            
        }
        //Find
        query.sort('-_id').exec((err, articles)=>{
            if(err){
                return res.status(200).send({
                    status: 'error',
                    message: 'No se pudo obtener la informacion de la Base de Datos'
                });
            }
            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                });
            }
            return res.status(200).send({
            status: 'success',
            articles
            });
        });
        
    },

    getArticle: (req,res) => {
        //Obtener ID de la URL
        var articleId = req.params.id;

        //Validad que ID existe
        if(!articleId || articleId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el artículo solicitado'
            });
        }

        //Buscar articulo
        Article.findById(articleId, (err,article)=>{            
            if(err || !article){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                });
            }

            return res.status(200).send({
                status: 'success',
                article
            });
        });

        //Devolver una respuesta
        
    }
}; //End Controller

module.exports = controller;