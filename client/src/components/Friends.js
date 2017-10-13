import React, { Component } from 'react';
import { Card} from 'semantic-ui-react';
import FriendEntry from './FriendEntry'

class Friends extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: [{name:"david", id:1}, {name:'danny', id:2}],

		}
		this.handleUserClick = this.handleUserClick.bind(this)
	}

	handleUserClick (userinfo) {
		console.log("friend was clicked", userinfo)
	}

	render() {
		return (
			<Card id="friends">
				<Card.Content>
				<Card.Header>Friends
				</Card.Header>
					{this.props.friends.map((user) =>
						<FriendEntry
						user={user}
						key={user.id}
						handleUserClick={this.handleUserClick}/>
						)}
				</Card.Content>
			</Card>
		)
	}
}

export default Friends;
