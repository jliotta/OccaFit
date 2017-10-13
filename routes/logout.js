var express = require('express');
var router = express.Router();
var db = require('../database/index.js');

router.get('/', (req, res) => {
  req.session.destroy(function (err) {
    if (!err) res.status(200).clearCookie('connect.sid').json({status: "Success"});
  })
});

module.exports = router;