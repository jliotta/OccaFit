import React, { Component } from 'react';
import { Modal, Header, Button, Image, Icon } from 'semantic-ui-react';

class Setup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displaySetup: true
		}
	}

	closeDisplay() {
		this.setState({
			displaySetup: false
		})
	}

	render() {
		return (
			<Modal open={this.state.displaySetup} closeIcon dimmer='blurring'>
        <Modal.Header>HEADER</Modal.Header>

          <Modal.Description>
            <Header>WELCOME TO FITBUD</Header>
            <p>Please set up your new profile!</p>
          </Modal.Description>

        <Modal.Actions>
          <Button secondary onClick={this.closeDisplay.bind(this)}>
            Later <Icon name='close' />
          </Button>
        </Modal.Actions>
      </Modal>
		)
	}
}

export default Setup;