var express = require('express');
var router = express.Router();
var userController = require('../controllers/usuarios.controllers')

router.post('/login', userController.loginUser);
router.post('/novoUsuario', userController.novoUsuario);
router.post('/dependencia', userController.userDependencia);
router.post('/registro', userController.registro);
router.get('/usuario', userController.getUser);

router.get('/dependencias', userController.getDependencias);
router.get('/evolucao', userController.getEvolucao);

module.exports = router;
