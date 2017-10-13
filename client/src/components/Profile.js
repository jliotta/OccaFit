import React, { Component } from 'react';
import Activities from './Activities';
import AboutMe from './AboutMe';
import Friends from './Friends';
import ProfilePic from './ProfilePic';
import Setup from './Setup';
import { Container, Card } from 'semantic-ui-react';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: null,
			user: null,
			activities: null,
			showModal: false,
			shouldIUpdate: true,
		}
		this.pullAboutMeData = this.pullAboutMeData.bind(this);
	}

	showSetupModal() {
		this.setState({
			showModal: true
		})
	}

	pullAboutMeData() {
    fetch('/profile/about', {credentials: 'include', headers: {user: this.props.match.params.id}})
		.then(response => {
			return response.json();
		})
	    .then(response => {
	      	this.setState({
					info: response[0]

	    	})
	    })

    }

	componentDidUpdate(){
		if (this.state.shouldIUpdate) {
			this.pullAboutMeData();
			this.getActivities();
			this.setState({shouldIUpdate: false});
		}
	}

	componentWillUnmount() {
		this.setState({shouldIUpdate: true}, () => {
			console.log('SHOULD I UPDATE?', this.state.shouldIUpdate);
		});
	}

	componentDidMount() {
			this.pullAboutMeData();
			this.getActivities();
	}

	componentWillMount() {
		fetch('/profile/' + this.props.match.params.id, { credentials: "include"})
		.then(resp => resp.json())
		.then(data => {
			this.setState({
				user: data
			});
		});
	}


	getActivities() {
		fetch('/profile/activities', { credentials: "include", headers: {user: this.props.match.params.id} })
		.then(resp => resp.json())
		.then(resp => {
			this.setState({ activities: resp });
		});
	}



	render() {
		return (
			[<Container style={{marginTop: '20px'}} id="profile">
				{this.state.user && this.props.user 
					? <ProfilePic user={this.state.user} currentUser={this.props.user} name={this.state.user && this.state.user.name}/>
					: null
				}
				<Card.Group itemsPerRow={3}>
					<Activities user={this.state.user} activities={this.state.activities}/>
					<AboutMe user={this.state.user} info={this.state.info} showSetupModal={this.showSetupModal.bind(this)}/>
					<Friends />
				</Card.Group>
			</Container>,
			<Container>
				{this.state.showModal && this.props.history.push('/setup')}
			</Container>]

		)
	}
}

export default Profile;
