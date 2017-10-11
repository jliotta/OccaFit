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
						{this.props.info && <Card.Meta>{this.props.info.email}</Card.Meta>}
						{this.props.info && <Card.Meta>{this.props.info.city}, {this.props.info.state}</Card.Meta>}
						{this.props.info && <Card.Description>{this.props.info.activity}</Card.Description>}
					</Card.Content>
					<Card.Content>
						<Button basic color='green' onClick={this.props.showSetupModal}>Edit</Button>
					</Card.Content>
				</Card>
		)
	}
}

export default AboutMe;
