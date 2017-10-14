import React, { Component } from 'react';
import { Menu, Input, Button, Dropdown, Card } from 'semantic-ui-react';

class NotificationListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: null,
      declined: null
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
            <Button color={this.props.accepted ? 'teal' : 'green'} onClick={() => this.props.acceptFriendRequest(this.props.user, this.props.notification)}>{this.props.accepted ? 'Accepted!' : 'Accept'}</Button>
            <Button color="red" onClick={() => this.props.handleDeclineClick(this.props.user, this.props.notification)}>{this.props.declined ? 'Declined!' : 'Decline'}</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }
}

export default NotificationListEntry;
