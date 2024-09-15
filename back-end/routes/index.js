var express = require('express');
var router = express.Router();
var podcasts = require('../controllers/podcasts.controller')

router.get('/podcasts', podcasts.getLinks);

module.exports = router;
