var express = require('express');
var router = express.Router();
var db = require('../database/index.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/', (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({});
  }
})

// grabs About Me info for the profile page
router.get('/about', (req, res) => {
  // get user id from the req
  var id = req.headers.user;

  db.getAboutMe(id, (result) => {
    res.send(result)
  })
})

router.get('/activities', (req, res) => {
  // Get all of this user's data
  // Get all of the upcoming events for this user also
  // Display them in chronological order
  db.getUserPostings(req.headers.user, userPosts => {
    db.getUserAcceptPostings(req.headers.user, acceptedPosts => {
      var activities = {
        hosted: userPosts,
        attended: acceptedPosts
      };
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

router.get('/relationship', (req, res) => {
  var currentUser = req.headers.currentuser;
  var otherUser = req.headers.otheruser;
  if (currentUser !== otherUser) {
    db.checkFriendStatus(currentUser, otherUser, (data) => {
      res.send(data);
    });
  }
});

router.get('/friends', (req, res) => {
  //Send back user data of the current users friends
  var userId = req.session.passport.user;
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
  db.friendRequest(req.body.currentUser, req.body.otherUser, (data) => {
    res.send(data);
  });
});

router.get('/:id', (req, res) => {
  // res.send('RENDER profile page');
  // console.log('user profile', req.user);
  db.findById(req.params.id, function(err, data) {
    if (err) {
      console.log('ERROR:', err);
    } else {
      res.send(data);
    }
  })
});

module.exports = router;
