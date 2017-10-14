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

  handleAcceptClick(requestor) {
    console.log('I clicked ACCEPT on friend request from', requestor.name)
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
          return <NotificationListEntry notification={notification} handleAcceptClick={this.handleAcceptClick.bind(this)} handleDeclineClick={this.handleDeclineClick.bind(this)}/>
        }) : <Card> <Card.Content>No Notifications Right Now</Card.Content> </Card>}
      </Card.Group>
    )
  }
}

export default NotificationList;
