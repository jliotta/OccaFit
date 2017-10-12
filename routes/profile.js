var express = require('express');
var router = express.Router();
var db = require('../database/index.js');

router.get('/', (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({});
  }
})

// grabs About Me info for the profile page
router.get('/about', (req, res) => {
  console.log('REQUEST BODY', req.headers)
  // get user id from the req
  var id = req.headers.user;
  console.log('ID', id)
  db.getAboutMe(id, (result) => {
    console.log('about to send response', result)
    res.send(result)
  })
})

router.get('/activities', (req, res) => {
  // Get all of this user's data
  // Get all of the upcoming events for this user also
  // Display them in chronological order
  console.log('ACTIVITIES GET REQUEST', req);
  db.getUserPostings(req.headers.user, userPosts => {
    db.getUserAcceptPostings(req.headers.user, acceptedPosts => {
      console.log('UserPosts:', userPosts.sort(function(o){ return new Date( o.date ) }));
      console.log('AcceptedPosts:', acceptedPosts.sort(function(o){ return new Date( o.date ) }));
      var activities = {
        hosted: userPosts,
        attended: acceptedPosts
      };
      console.log('Activities:', activities);
      res.send(activities);
    })
  })
  //
  // db.getUserAcceptPostings()
})

router.post('/', (req, res) => {

  //console.log('user from request', req.session.passport.user);
  var id = req.session.passport.user;
  var profileObj = {
    gender: req.body.gender,
    activity: req.body.activity,
    userId: id
  };

  db.createProfile(profileObj, (result) => {
    //console.log('created profile');

    res.redirect('/postings');
  });
});

router.get('/friends', (req, res) => {
  //Send back user data of the current users friends
  var userId = req.headers.user
  db.friendList(userId, (result)=> {
    Promise.all(result.map(function(el) {
        return new Promise ((resolve, reject) => {
          var id = el.userOneId;
          db.findById(id, (err, result) => {
            if(err) {
              reject(err);
            }else {
              resolve(result);
            }
          });
        })
    })).then(result => {

      res.send(result);
    })

  })
});

router.post('/friends', (req, res) => {
  console.log('INSIDE FRIENDS POST:', req);
  res.send({});
});

router.get('/:id', (req, res) => {
  // res.send('RENDER profile page');
  // console.log('user profile', req.user);
  console.log('***REQUEST***:', req.params.id);
  db.findById(req.params.id, function(err, data) {
    if (err) {
      console.log('ERROR:', err);
    } else {
      console.log('GOT ID FROM DB:', data)
      res.send(data);
    }
  })
});

module.exports = router;
