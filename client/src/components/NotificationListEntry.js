import React, { Component } from 'react';
import { Menu, Input, Button, Dropdown, Card } from 'semantic-ui-react';

class NotificationListEntry extends Component {
  constructor(props) {
    super(props);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
  }

  handleAccept() {
    this.props.handleAcceptClick(this.props.notification);
  }

  handleDecline() {
    this.props.handleDeclineClick(this.props.notification);
  }

  render() {
    console.log(this.props)
    return (
      <Card color='blue'>
        <Card.Content>
          {this.props.notification && <Card.Description>{this.props.notification.name} sent you a friend request!</Card.Description>}
        </Card.Content>
        <Card.Content>
          <Button.Group size="mini" attached="bottom">
            <Button color="blue" onClick={this.handleAccept}>Accept</Button>
            <Button basic color="blue" onClick={this.handleDecline}>Decline</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }
}

export default NotificationListEntry;
