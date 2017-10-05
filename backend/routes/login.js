var express = require('express');
var router = express.Router();
var db = require('../database/index.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');



function middleware(req, res, next){
  console.log('req body in middleware:', req.body);
  console.log('req user Object>>>>>>:', req.user)
  // console.log('res:', res);
  next();
  
}


passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('username and password:', username, password);
    db.checkUser(username, function (err, dbUserResult) { 
      console.log('user inside passport:', dbUserResult)
      if (err) { return done(err); }
      if (!dbUserResult) { return done(null, false); }
      db.comparePassword(password, dbUserResult[0].password, function(err, isMatch){
        console.log('inside passports compare password');
        if (err) {
          console.log('cannot compare passwords');
        }
        if(isMatch) {
          return done (null, dbUserResult, {message: 'password matched'});
        } else {
          console.log('checking for invalid password')
          return done(null, false, {message: 'invalid password'});
        }
      });
  
      
  });
    
}));




passport.serializeUser(function(user, done) {
  console.log('user in serialize', user);
  done(null, user[0].id);
});

passport.deserializeUser(function(id, done) {
  console.log('in deserialize');
  db.findById(id, function(err, user) {
  console.log('user in deserialize', user);
    done(err, user);
  });
});


// on success login, redirect to dashboards
// successRedirect:'/', 

// on successful login
router.post('/',
  passport.authenticate('local', {failureFlash: true, successFlash: true}),
  

  function(req, res) {
    console.log('request inside login:', req)
    // res.redirect('/dashboard');
    console.log('auth info:', req.authInfo)
    res.json(req.authInfo);
});

// router.post('/',
//   middleware,
//   function(req, res) {
//     console.log('request inside login:', req.body)
//     res.send('hello')
//     // res.redirect('/');
// });



router.get('/', (req, res) => {
  console.log('login get')
  res.end();
});

module.exports = router;
//create register
//login 