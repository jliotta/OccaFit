import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Card, Button } from 'semantic-ui-react';

class AboutMe extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('current user', this.props.user)
		return (
				<Card>
					<Card.Content>
						{this.props.user && <Card.Header>About {this.props.user.name}</Card.Header>}
					</Card.Content>
					<Card.Content>
						<Card.Description>Contact Me:</Card.Description>
						{this.props.info ? <Card.Meta>{this.props.info.email}</Card.Meta> : <Card.Meta>ADD YOUR CONTACT INFO</Card.Meta>}
						{this.props.info && <Card.Meta>{this.props.info.city}, {this.props.info.state}</Card.Meta>}
						<Card.Description>Get to Know Me:</Card.Description>
						{this.props.info ? <Card.Meta>{this.props.info.activity}</Card.Meta> : <Card.Meta>ADD YOUR INTERESTS</Card.Meta>}
					</Card.Content>
					<Card.Content>
						<Button basic color='green' onClick={this.props.showSetupModal}>Edit</Button>
					</Card.Content>
				</Card>
		)
	}
}

export default AboutMe;
