'user strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

router.get('/test-de-controlador', ArticleController.test);
router.post('/datos-curso', ArticleController.datosCurso);

module.exports = router;