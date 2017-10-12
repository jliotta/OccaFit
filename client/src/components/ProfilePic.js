import React, { Component } from 'react';
import { Container, Image, List } from 'semantic-ui-react';

class ProfilePic extends Component {
  constructor(props) {
    super(props);
    console.log('PROF PIC:', this);
  }

  render() {
    return (
      <Container style={{margin: '30px'}}>

        <Image src={this.props.user} size='small' shape='circular' centered style={{margin: 'auto'}} />
      
        <Container style={{"textAlign": "center"}}>
          <List style={{margin: '10px'}}>
            <List.Item>
              <List.Header>{this.props.name}</List.Header>
            </List.Item>
          </List>
        </Container>

      </Container>
    );
  }
}

export default ProfilePic;
