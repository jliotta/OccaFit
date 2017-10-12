var express = require('express');
var router = express.Router();
var db = require('../database/index.js');


router.get('/', (req, res) => {
  console.log("IN SEARCH ROUTER")
  db.getUsers((results) => {
    var options = results.map( (result) => {
      return {
        key: result.id,
        text: result.name,
        value: result.id
      }
    });
    console.log('HERE ARE OPTIONS', options)
    res.send(options)
  })
})

router.get('/user', (res, res) => {
  var userId = req.headers.userId;
  console.log('IN ROUTER WITH USER ID', req.headers.userId)
  var path = '../profile/' + userId;
  res.redirect(path)
})

module.exports = router;
