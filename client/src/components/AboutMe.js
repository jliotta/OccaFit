import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class AboutMe extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('current user', this.props.user)
		return (
			<div id="about-me">
				<h1>{this.props.user && this.props.user.name}</h1>
			</div>
		)
	}
}

export default AboutMe;
