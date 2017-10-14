var express = require('express');
var router = express.Router();
var db = require('../database/index.js');

router.post('/', (req, res) => {
  var options = req.body;

  db.getAboutMe(options.userId, (err, results) => {

    if (err) {
      console.err('error', err);
    } else {
      if (results.length === 0) {
        db.insertAboutMe(options, (err, result) => {
          if (err) {
            res.status(401);
          } else {
            res.send(result);
          }
        })
      } else {
        db.updateAboutMe(options, (err, result) => {
          if (err) {
            res.status(401);
          } else {
            res.send(result);
          }
        })
      }
    }

  })
})


module.exports = router;
