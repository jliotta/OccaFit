var express = require('express');
var router = express.Router();
var db = require('../database/index.js');

router.post('/', (req, res) => {
  var options = req.body;
  options.userId = req.session.passport.user;
  db.getAboutMe(options.userId, results => {
    if (results.length === 0) {
      console.log("no user info yet")
      db.insertAboutMe(options, (result) => {
        console.log('about to callback')
        res.send(result)
      })
    } else {
      console.log("has user info")
      db.updateAboutMe(options, (result) => {
        console.log('about to callback')
        res.send(result)
      })
    }
  })
})


module.exports = router;
