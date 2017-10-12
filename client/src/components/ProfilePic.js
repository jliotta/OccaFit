import React, { Component } from 'react';
import { Container, Image, List, Button } from 'semantic-ui-react';

class ProfilePic extends Component {
  constructor(props) {
    super(props);
    console.log('PROF PIC:', this);
  }

  images = ['daniel.jpg', 'elliot.jpg', 'matthew.png', 'rachel.png'];
  pic = '/' + this.images[Math.floor(Math.random() * this.images.length)];

  render() {
    return (
      <Container style={{margin: '30px'}}>

        <Image src={this.pic} size='small' shape='circular' centered style={{margin: 'auto'}} />
      
        <Container style={{"textAlign": "center"}}>
          <List style={{margin: '10px'}}>
            <List.Item>
              <List.Header>{this.props.name}</List.Header>
              {this.props.user && this.props.user.id !== this.props.currentUser.id
                ? <Button primary> Add Friend </Button>
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
