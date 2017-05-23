var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('\n\n');
    console.log('Host:', req.hostname, ', ', req.ip);
    console.log('Query Strings:');
    console.log(JSON.stringify(req.query, null, 2));
    res.json({
        status: 'success'
    })
});

module.exports = router;
