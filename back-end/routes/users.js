var express = require('express');
var router = express.Router();
var userController = require('../controllers/usuarios.controllers')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', userController.loginUser);

module.exports = router;
