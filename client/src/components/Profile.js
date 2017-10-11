import React, { Component } from 'react';
import Activities from './Activities';
import AboutMe from './AboutMe';
import Friends from './Friends';
import ProfilePic from './ProfilePic';
import { Container } from 'semantic-ui-react';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: null
			details: 'Contact Details'
		}
	}

	pullAboutMeData() {
    console.log('in pullAboutMeData')
    fetch('/profile/about', {credentials: 'include'})
			.then(response => {
				console.log(response);
				return response.json()
			})
      .then(response => {
          this.setState({
						info: response
					})
					console.log('new STATE', this.state.info)
      })
    }

   componentDidMount(){
     this.pullAboutMeData();
  }

  images = ['daniel.jpg', 'elliot.jpg', 'matthew.png', 'rachel.png'];

  user = '/' + this.images[Math.floor(Math.random() * this.images.length)];

	render() {
		return (
			<Container style={{marginTop: '20px'}} id="profile">
				<h1> THIS IS YOUR PROFILE </h1>
				<ProfilePic user={this.user} details={this.state.details}/>
				<Activities />
				<AboutMe user={this.props.user} info={this.state.info}/>
				<Friends />
			</Container>
		)
	}
}

export default Profile;
