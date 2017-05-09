var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('\n\nCookie received by cookie theft:');
  console.log(JSON.stringify(req.cookies, null, 2), '\n\n');
  res.send('Your cookie is parsed :)');
});

module.exports = router;
