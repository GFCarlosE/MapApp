var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This section must show something about something');
});

router.get('/details', function(req, res, next) {
  res.send('This shows some details');
});

module.exports = router;
