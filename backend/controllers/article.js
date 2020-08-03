'use strict'
// Librerías JavaScript
var validator = require('validator');
var fs = require('fs');
var path = require('path');

// Clases importadas para este proyecto
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
    },
    update: (req, res) => {
        //Obtener ID del artículo por URL
        var articleId = req.params.id;        

        //Obtener datos recibidor por PUT
        var params = req.body;

        //Valida datos
        try{
            var validateTitle = !validator.isEmpty(params.title);
            var validateContent = !validator.isEmpty(params.content);
        }catch(err){
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }
        
        if(validateTitle && validateContent){
            //Realizar consulta Find->Update
            Article.findOneAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdated) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar el registro'
                    });
                }
                if(!articleUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el artículo'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    articleUpdated
                });
            });
        }else {
            return res.status(200).send({
                status: 'error',
                message: 'Validación ha fallado'
            });
        }
    },
    delete: (req, res) => {
        //Recoger el ID de la URL
        var articleId = req.params.id;

        //FindAndDelete
        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar el artículo'
                });
            }
            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el artículo, posiblemente no existe en la Base de Datos'
                });
            }
            return res.status(200).send({
                status: 'success',
                articleRemoved
            });
        });        
    },
    upload: (req, res) => {
        //Configurar el Modulo de Connect Multiparty router/article.js (Done)

        //recoger archivo de la peticion
        var fileName = 'Imagen no subida...';

        if(!req.files){
            return res.status(404).send({
                status: 'error',
                message: fileName
            });
        }

        //Conseguir el nombre y extension del archivo
        var filePath = req.files.file0.path;
        var fileSplit = filePath.split('\\');

        // * ADVERTENCIA * Para Linux o Mac
        // var fileSplit = filePath.split('/');

        //Nombre y extensión del archivo
        var fileName = fileSplit[2];
        var extensionSplit = fileName.split('.');
        var fileExt = extensionSplit[1];

        //Comprobar la extension del archivo, si no es valido, eliminar archivo
        if(fileExt != 'png' && fileExt != 'jpeg' && fileExt != 'jpg' && fileExt != 'gif'){
            // Borrar el archivo subido
            fs.unlink(filePath, (err)=>{
                
                return res.status(200).send({
                    status: 'error',
                    message: 'La extensión de la imagen no es válida'
                });
            })
        }else{
            //Si todo es valido, busvar artículo, asignar el nombre de la imagen y actualizarlo
            //Obtener ID de la URL
            var articleId = req.params.id;
            //Buscar articulo para actualizar en la Base de Datos
            Article.findOneAndUpdate({_id: articleId}, {image:fileName}, {new:true}, (err, articleUpdated)=>{
                if(err || !articleUpdated){
                    return res.status(200).send({
                        status: 'error',
                        message: 'Error al guardar el archivo de imagen'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });
        }
        // End Upload File  
    },
    getImage: (req, res) => {
        var file = req.params.image;
        var pathFile = './upload/articles/'+file;

        fs.exists(pathFile, (exists) => {
            if(exists){
                return res.sendFile(path.resolve(pathFile));
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: 'El archivo solicitado no existe en el Server'
                });
            }
        });
    }
}; //End Controller

module.exports = controller;