/*
*users.js
*Muksud Hussain Mahi
*ID: 301155894
*June 20, 2021
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
