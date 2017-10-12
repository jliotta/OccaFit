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
			details: 'Contact Details',
			activities: null,
			showModal: false,
			shouldIUpdate: true,

			details: 'Contact Details'

		}
		this.pullAboutMeData = this.pullAboutMeData.bind(this)
	}

	showSetupModal() {
		this.setState({
			showModal: true
		})
		console.log('new state', this.state.showModal)
	}

	pullAboutMeData() {
		var id = this.props.match.params.id;
		this.props.getAboutMe(id);
  }

	// componentDidUpdate(){
	// 	//this.checkAuth();
	// 	console.log('PROPS from comp will receive props', this.props)
	// 	console.log('SHOULD I UPDATE?', this.state.shouldIUpdate);
	// 	if (this.state.shouldIUpdate) {
	// 		this.pullAboutMeData();
	// 		this.getActivities();
	// 		this.setState({shouldIUpdate: false});
	// 	}
	// }
	//
	// componentWillUnmount() {
	// 	console.log('COMPONENT WILL UNMOUNT:', this.props);
	// 	console.log('SHOULD I UPDATE?', this.state.shouldIUpdate);
	// 	this.setState({shouldIUpdate: true}, () => {
	// 		console.log('SHOULD I UPDATE?', this.state.shouldIUpdate);
	// 	});
	//
	// }

	// componentDidMount() {
	// 	// if (this.props.user) {
	// 		this.pullAboutMeData();
	// 		this.getActivities();
	// 	// }
	// 	console.log('PARAMETER :id', this.props.match.params.id);
	// }

	componentWillMount() {
		var id = this.props.match.params.id;
			this.props.getUser(id);
			this.pullAboutMeData();
			this.getActivities();
	}

  images = ['daniel.jpg', 'elliot.jpg', 'matthew.png', 'rachel.png'];

  user = '/' + this.images[Math.floor(Math.random() * this.images.length)];


	getActivities() {
		var id = this.props.match.params.id;
		this.props.getUserActivities(id);
	}



	render() {
		console.log('CURRENT USER', this.props)
		return (
			[<Container style={{marginTop: '20px'}} id="profile">
				<ProfilePic user={this.user} details={this.state.details}/>

				<Card.Group itemsPerRow={3}>
					<Activities user={this.props.currentProfile} activities={this.props.activities}/>
					<AboutMe user={this.props.currentProfile} info={this.props.info} showSetupModal={this.showSetupModal.bind(this)}/>
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
