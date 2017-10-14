var express = require('express');
var router = express.Router();
var db = require('../database/index.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var socketIo = require('socket.io');
var http = require('http');

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.checkUser(username, function (err, dbUserResult) {
      if (err) { return done(err); }
      if (!dbUserResult) { return done(null, false); }
      db.comparePassword(password, dbUserResult[0].password, function(err, isMatch){
        //console.log('inside passports compare password');
        if (err) {
          //console.log('cannot compare passwords');
        }
        if(isMatch) {
          return done (null, dbUserResult, {message: 'password matched'});
        } else {
          //console.log('checking for invalid password')
          return done(null, false, {message: 'invalid password'});
        }
      });
  });
}));

passport.serializeUser(function(user, done) {
  // console.log('user in serialize', user);
  done(null, user[0].id);
});

passport.deserializeUser(function(id, done) {
  db.findById(id, function(err, user) {
  // console.log('user in deserialize', user);
    done(err, user);
  });
});

// on success login, redirect to dashboards
// successRedirect:'/',

// on successful login
router.post('/',
  passport.authenticate('local', {failureFlash: true, successFlash: true}),
  function(req, res) {

    res.json(req.user);
  }
);

router.get('/', (req, res) => {
  //console.log('login get')
  res.end();
});

module.exports = router;
//create register
//login
