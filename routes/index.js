var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSE484 Lab2' });
});

router.get('/panda.jpg', function (req, res, next) {
  res.render('panda');
});

router.get('/chicken.jpg', function (req, res, next) {
    res.render('chicken');
});

router.get('/cookie.jpg', function (req, res, next) {
    res.render('cookie');
});

module.exports = router;
