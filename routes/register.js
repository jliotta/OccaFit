var express = require('express');
var router = express.Router();
var db = require('../database/index.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
  //console.log('user in serialize', user);
  done(null, user[0].id);
});

passport.deserializeUser(function(id, done) {
  console.log('in deserialize', id);
  db.findById(id, function(err, user) {
  // console.log('user in deserialize', user);
    done(err, user);
  });
});

router.post('/', function (req, res) {
  db.checkUser(req.body.username, function(err, result) {
    if (result) {
      // the user exists and we will need to send a message and redirect them to login instead
      // res.redirect('/login');
      res.status(409).json({userExists: true});
    } else {
      db.createUser(req.body, function(err, result) {
        if (err) {
          console.log('ERROR:', err);
        } else {
          req.login(req.body.username, function (err) {
            if ( ! err ){
              res.json({name: req.body.name});
            } else {
              console.log('ERROR:', err);
              console.log('ERROR LOGGING IN AUTO');
              res.send('ERROR LOGGING IN AUTO');
            }
        });
        }
      });
    }
  });
});

module.exports = router;