import React, { Component } from 'react';
import { Menu, Input, Button, Dropdown, Card } from 'semantic-ui-react';
import NotificationListEntry from './NotificationListEntry.js'

class NotificationList extends Component {
  constructor (props){
    super(props);
    this.state = {
      notifications: []
    }
  }

  getPendingRequests() {
    fetch('/notification', { credentials: "include", headers: {user: this.props.user.id} })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          notifications: response
        })
      })
  }

  handleDeclineClick(requestor) {
    console.log('I clicked DECLINE on friend request from', requestor.name)
  }

  componentWillMount() {
    this.getPendingRequests();
  }

  render() {
    console.log('NOTIFICATIONS', this.state.notifications)
    return (
      <Card.Group>
        {this.state.notifications.length > 0 ? this.state.notifications.map(notification => {
          return <NotificationListEntry user={this.props.user} notification={notification} acceptFriendRequest={this.props.acceptFriendRequest} handleDeclineClick={this.handleDeclineClick.bind(this)}/>
        }) : <Card.Content>No Notifications</Card.Content>}
      </Card.Group>
    )
  }
}

export default NotificationList;
