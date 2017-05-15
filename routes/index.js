var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSE484 Lab2' });
});

router.get('/panda.jpg', function (req, res, next) {
  res.render('panda');
});

module.exports = router;
