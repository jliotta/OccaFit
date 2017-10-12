import React, { Component } from 'react';
import { Container, Image, List, Button } from 'semantic-ui-react';

class ProfilePic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Add Friend',
      color: 'blue'
    }
    console.log('PROF PIC:', this);
  }

  images = ['daniel.jpg', 'elliot.jpg', 'matthew.png', 'rachel.png'];
  pic = '/' + this.images[Math.floor(Math.random() * this.images.length)];

  handleFriendRequests() {
    this.setState({
      message: 'Request Pending',
      color: 'green'
    });
    fetch('/profile/friends', {credentials: 'include', method: 'POST'});
  }

  render() {
    return (
      <Container style={{margin: '30px'}}>

        <Image src={this.pic} size='small' shape='circular' centered style={{margin: 'auto'}} />
      
        <Container style={{"textAlign": "center"}}>
          <List style={{margin: '10px'}}>
            <List.Item>
              <List.Header>{this.props.name}</List.Header>
              {this.props.user && this.props.user.id !== this.props.currentUser.id
                ? <Button color={this.state.color} onClick={() => this.handleFriendRequests()}> {this.state.message} </Button>
                : null
              }
            </List.Item>
          </List>
        </Container>

      </Container>
    );
  }
}

export default ProfilePic;
