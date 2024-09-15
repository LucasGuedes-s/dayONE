var express = require('express');
var router = express.Router();
var podcasts = require('../controllers/podcasts.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/podcasts', podcasts.getLinks);

module.exports = router;
