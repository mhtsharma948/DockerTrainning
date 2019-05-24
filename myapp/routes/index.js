var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mohit', function(req, res, next) {
  res.send({ title: 'mohit' });
});

module.exports = router;
