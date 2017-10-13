var express = require('express');
var router = express.Router();
var db = require('../database/index.js');

router.post('/', (req, res) => {
  var options = req.body;
  
  db.getAboutMe(options.userId, results => {
    if (results.length === 0) {
      db.insertAboutMe(options, (result) => {
        res.send(result)
      })
    } else {
      db.updateAboutMe(options, (result) => {
        res.send(result)
      })
    }
  })
})


module.exports = router;
