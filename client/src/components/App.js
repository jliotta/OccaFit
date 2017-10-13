import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import MainNav from './MainNav';
import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Setup from './Setup';
import Listings from './Listings';
import NoMatch from './NoMatch';
import Dashboard from './Dashboard';
import Profile from './Profile';
import CreateListing from './CreateListing';
import data from '../sampleData';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      user: null,
      visible: null,
      activites: null,
      info: {},
      currentProfile: null,
      friends: [],
      friendStatus: null,
      requested: null,
      accepted: null
    }

    this.cookies = new Cookies();
    this.checkAuth();
  }

  checkAuth = () => {
    fetch('/profile', {
      credentials: 'include'
    }).then(response => {
      return response.ok ? response.json() : {};
    }).then(user => {
      if (user && user.name) {
        this.setState({
          user: user,
          authenticated: true
        });
      }
    });
  }

  handleAuthenticated = (user) => {
    this.setState({
      authenticated: true,
      user: user
    });
    console.log('User authenticated...');
    console.log('USER:', this.state.user);
  }

  handleSignOff = () => {
    this.setState({
      authenticated: false,
      user: null
    });
    fetch('/logout', {
      credentials: 'include'
    }).then(response => console.log(response.status));
  }

  changeProfile = () => {

    console.log('THIS PROPS HISTORY: ', this.props);
  }

  getAboutMe = (id) => {
    fetch('/profile/about', {credentials: 'include', headers: {user: id}})
		.then(response => {
			console.log('response', response);
			return response.json();
		})
	    .then(response => {
				console.log(response)
	      	this.setState({
					info: response[0]

	    	})
	    })
  }

  getUserActivities = (id) => {
    fetch('/profile/activities', { credentials: "include", headers: {user: id} })
		.then(resp => resp.json())
		.then(resp => {
			this.setState({ activities: resp });
		});
  }

  getUser(id) {
    fetch('/profile/' + id, { credentials: "include"})
		.then(resp => resp.json())
		.then(data => {
			console.log('USER DATA:', data);
			this.setState({
				currentProfile: data
			});
		});
  }

  getUserFriends(id) {
    fetch('/profile/friends', {credentials: 'include', headers: {user: id}})
			.then(response => {
				console.log(response);
				return response.json()
			})
      		.then(response => {
          		this.setState({
						friends: response
			})
			console.log('new STATE', this.state.friends)
      })
  }

  checkFriendStatus(user1, user2) {
    var options = {
      credentials: 'include',
      headers: {
        currentUser: user1, 
        otherUser: user2
      }
    }
    fetch('/profile/relationship', options)
    .then(data => data.json())
    .then(data => {
      if (data.length > 0) {
        console.log('DATA:', data)
        this.setState({
          friendStatus: data[0].statusId
        });
        if (this.state.friendStatus === 0) {
          this.setState({
            requested: true
          });
        } else if (this.state.friendStatus === 1) {
          console.log('INSIDE ACCEPTED CHECK:', this);
          this.setState({
            accepted: true,
            requested: true
          })
        } 
      } else {
        this.setState({
          friendStatus: null,
          requested: false
        });
      }
    });
  }

  render() {
    console.log("IN APP USER", this)
    return (
      <Router>
        <div>
          <MainNav authenticate={this.handleAuthenticated} isAuthed={this.state.authenticated}
                   signoff={this.handleSignOff} user={this.state.user} getUser={this.getUser.bind(this)} getAboutMe={this.getAboutMe.bind(this)} getUserActivities={this.getUserActivities.bind(this)} getUserFriends={this.getUserFriends.bind(this)} changeProfile={this.changeProfile.bind(this)} checkFriendStatus={this.checkFriendStatus.bind(this)} />
          <Switch>
            <Route exact path='/' render={props => (
              <Home user={this.state.user} visible={this.state.visible} {...props} />
            )} />

            <Route exact path='/listings' render={props => (
              <Listings {...props} user={this.state.user} />
            )} />

            <Route exact path='/about' component={About} />

            <Route exact path='/login' render={props => (
              <Login authenticate={this.handleAuthenticated} {...props} />
            )} />

            <Route exact path='/signup' component={Signup} />

            <Route exact path='/setup' render={ props => (
                <Setup user={this.state.user} {...props}/>
              )} />

            <Route exact path='/dashboard' render={props => (
              <Dashboard listings={data} {...props} />
            )} />


            <Route path="/profile/:id" render={props => (
              <Profile user={this.state.user} currentProfile={this.state.currentProfile} getUser={this.getUser.bind(this)} getUserFriends={this.getUserFriends.bind(this)} friends={this.state.friends} router={Router} getAboutMe={this.getAboutMe.bind(this)} getUserActivities={this.getUserActivities.bind(this)} activities={this.state.activities} info={this.state.info} route={Route} {...props} checkFriendStatus={this.checkFriendStatus.bind(this)} friendStatus={this.state.friendStatus} requested={this.state.requested} accepted={this.state.accepted}/>
            )} />

            <Route exact path='/create' render={props => (
              <CreateListing {...props} />
            )} />

            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
