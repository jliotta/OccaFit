var express = require('express');
var router = express.Router();
var db = require('../database/index.js');


router.get('/', (req, res) => {
  db.getUsers((results) => {
    var options = results.map( (result) => {
      return {
        key: result.id,
        text: result.name,
        value: result.id
      }
    });
    res.send(options)
  })
})

router.get('/user', (req, res) => {
  var userId = req.headers.userid;
  var path = '../profile/' + userId;
  res.redirect(301, path)
})

module.exports = router;
