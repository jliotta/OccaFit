import React, { Component } from 'react';
import { Menu, Input, Button, Dropdown, Card } from 'semantic-ui-react';

class NotificationListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: null,
      declined: null
    }
    console.log('Notification Entry:', this);
  }

  handleFriendAcceptance(user1, user2) {
    console.log('CLICKED ACCEPT')
    this.props.acceptFriendRequest(user1, user2);
  }

  handleDecline() {
    this.props.handleDeclineClick(this.props.notification);
    this.setState({
      accepted: true
    });
  }

  render() {
    return (
      <Card color='blue'>
        <Card.Content>
          {this.props.notification && <Card.Description>{this.props.notification.name} sent you a friend request!</Card.Description>}
        </Card.Content>
        <Card.Content>
          <Button.Group size="mini" attached="bottom">
            <Button color={this.state.accepted ? 'teal' : 'green'} onClick={() => this.handleFriendAcceptance(this.props.user, this.props.notification)}>{this.state.accepted ? 'Accepted!' : 'Accept'}</Button>
            <Button basic color="blue" onClick={this.handleDecline}>Decline</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }
}

export default NotificationListEntry;
