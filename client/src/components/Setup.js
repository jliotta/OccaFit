import React, { Component } from 'react';
import { Modal, Header, Button, Image, Icon, Form} from 'semantic-ui-react';

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
		});
		this.props.history.replace('/login');
	}

	render() {
		return (
			<Modal open={this.state.displaySetup} closeIcon dimmer='blurring'>

        <Modal.Header>WELCOME TO FITBUD</Modal.Header>
        	<p>Please set up your new profile!</p>
        <Form>
        <Form.Group widths='equal'>
          <Form.Input label='Email' placeholder='Email' />
          <Form.Input label='City' placeholder='City' />
          <Form.Input label='State' placeholder='State' />
        </Form.Group>
        </Form>

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