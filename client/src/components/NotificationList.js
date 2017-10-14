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

  componentWillMount() {
    this.getPendingRequests();
  }

  render() {
    return (
      <Card.Group>
        {this.state.notifications.length > 0 ? this.state.notifications.map(notification => {
          return <NotificationListEntry user={this.props.user} notification={notification} acceptFriendRequest={this.props.acceptFriendRequest} handleDeclineClick={this.props.handleDeclineClick}/>
        }) : <Card.Content>No Notifications</Card.Content>}
      </Card.Group>
    )
  }
}

export default NotificationList;
