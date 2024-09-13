var express = require('express');
var router = express.Router();
var userController = require('../controllers/usuarios.controllers')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', userController.loginUser);
router.post('/novoUsuario', userController.novoUsuario);
router.post('/dependencia', userController.userDependencia);

router.post('/registro', userController.registro);
router.get('/usuario', userController.getUser);

module.exports = router;
