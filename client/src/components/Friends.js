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

	componentDidMount () {
<<<<<<< HEAD
		// fetch('/profile/friends', {credentials: 'include'})
		// 	.then(response => {
		// 		console.log(response);
		// 		return response.json()
		// 	})
    //   		.then(response => {
    //       		this.setState({
		// 				friends: response
		// 	})
		// 	console.log('new STATE', this.state.friends)
    //   })

=======
		fetch('/profile/friends', {credentials: 'include'})
			.then(response => {
				return response.json()
			})
      		.then(response => {
          		this.setState({
						friends: response
			})
      })
    
>>>>>>> Display friend button only when it's not your profile
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
