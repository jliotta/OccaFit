import React, { Component } from 'react';
import Activities from './Activities';
import AboutMe from './AboutMe';
import Friends from './Friends';
import { Container } from 'semantic-ui-react';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: null
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

	render() {
		return (
			<Container style={{marginTop: '20px'}} id="profile">
				<h1> THIS IS YOUR PROFILE </h1>
				<Activities />
				<AboutMe user={this.props.user} info={this.state.info}/>
				<Friends />
			</Container>
		)
	}
}

export default Profile;
