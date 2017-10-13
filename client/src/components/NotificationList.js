import React, { Component } from 'react';
import { Menu, Input, Button, Dropdown, Card } from 'semantic-ui-react';
import NotificationListEntry from './NotificationListEntry.js'

class NotificationList extends Component {
  constructor (props){
    super(props);
    this.state = {
      notifications: null
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
    console.log('NOTIFICATIONS', this.state.notifications)
    return (
      <Card.Group>
        {this.state.notifications && this.state.notifications.map(notification => {
          return <NotificationListEntry notification={notification}/>
        })}
      </Card.Group>
    )
  }
}

export default NotificationList;
