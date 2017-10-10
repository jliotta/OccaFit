import React, { Component } from 'react';
import Activities from './Activities';
import AboutMe from './AboutMe';
import Friends from './Friends';
import { Container } from 'semantic-ui-react';

class Profile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container style={{marginTop: '20px'}} id="profile">
				<h1> THIS IS YOUR PROFILE </h1>
				<Activities />
				<AboutMe />
				<Friends />
			</Container>
		)
	}
}

export default Profile;
