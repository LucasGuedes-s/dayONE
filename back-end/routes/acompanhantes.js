var express = require('express');
var router = express.Router();
var acompanhanteController = require('../controllers/acompanhante.controllers')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/acompanhante/:email', acompanhanteController.getAcompanhante);

router.post('/login', acompanhanteController.loginAcompanhante);
router.post('/novoAcom', acompanhanteController.novoAcompanhante);

module.exports = router;