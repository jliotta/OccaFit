import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import FriendEntry from './FriendEntry'

class Friends extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: [{name:"david", id:1}, {name:'danny', id:2}]
		}
	}

	componentDidMount () {

	}

	render() {
		return (
			<Container id="friends">
			<h1>Hello</h1>
				{this.state.friends.map((user) => 
					<FriendEntry user={user} key={user.id}/>
					)}
			</Container>
		)
	}
}

export default Friends;