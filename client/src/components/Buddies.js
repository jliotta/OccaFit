import React, { Component } from 'react';
import { Card, Icon, Image, List } from 'semantic-ui-react';

class WorkoutDropdown extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <List>
        <a><Icon name='user' />Username</a>
      </List>
    );
  }
}

export default WorkoutDropdown;
