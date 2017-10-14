import React, { Component } from 'react';
import { Menu, Input, Button, Dropdown, Card } from 'semantic-ui-react';

class NotificationListEntry extends Component {
  constructor(props) {
    super(props);
  }

  handleAcceptance() {
    if (!this.props.declined) {
      this.props.acceptFriendRequest(this.props.user, this.props.notification)
    }
  }

  handleDecline() {
    if (!this.props.accepted) {
      this.props.handleDeclineClick(this.props.user, this.props.notification);
    }
  }

  render() {
    return (
      <Card color='blue'>
        <Card.Content>
          {this.props.notification && <Card.Description>{this.props.notification.name} sent you a friend request!</Card.Description>}
        </Card.Content>
        <Card.Content>
          <Button.Group size="mini" attached="bottom">
            <Button diasbled={this.props.declined} color={this.props.accepted ? 'teal' : 'green'} onClick={() => this.handleAcceptance()}>{this.props.accepted ? 'Accepted!' : 'Accept'}</Button>
            <Button disabled={this.props.accepted}color="red" onClick={() => this.handleDecline()}>{this.props.declined ? 'Declined!' : 'Decline'}</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }
}

export default NotificationListEntry;
