var express = require('express');
var router = express.Router();
var db = require('../database/index.js');

router.post('/', (req, res) => {
  console.log('posted to setup router')
})


module.exports = router;
