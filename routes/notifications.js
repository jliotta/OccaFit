var express = require('express');
var router = express.Router();
var db = require('../database/index.js');


router.get('/', (req, res) => {
  var id = req.headers.user;
  console.log('IN SERVER USER ID', id)
  db.getPendingFriendRequests(id, (err, results) => {
    if (err) {
      res.status(401)
    } else {
      res.send(results)
    }
  })
})

module.exports = router;
