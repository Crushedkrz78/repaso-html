'user strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

var multipart = require('connect-multiparty');
var mdUpload = multipart({uploadDir: './upload/articles'});

// Rutas de prueba
router.get('/test-de-controlador', ArticleController.test);
router.post('/datos-curso', ArticleController.datosCurso);

// Rutas Útiles
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);
//Route para cargar archivos a la Base de Datos
router.post('/upload-image/:id?',mdUpload, ArticleController.upload);
router.get('/get-image/:image', ArticleController.getImage);
router.get('/search/:search', ArticleController.search);


module.exports = router;