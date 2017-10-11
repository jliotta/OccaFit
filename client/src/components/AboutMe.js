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
				<h3>{this.props.info && this.props.info.email}</h3>
				<h3>{this.props.info && this.props.info. city}, {this.props.info && this.props.info.state}</h3>
				<h3>{this.props.info && this.props.info.activity}</h3>
			</div>
		)
	}
}

export default AboutMe;
