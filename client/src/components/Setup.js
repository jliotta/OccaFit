import React, { Component } from 'react';
import { Modal, Header, Button, Icon, Form, TextArea, Select} from 'semantic-ui-react';

var states = [`AL`, `AK`, `AZ`, `AR`, `CA`, `CO`, `CT`, `DE`, `DC`, `FL`, `GA`, `HI`, `ID`, `IL`, `IN`, `IA`, `KS`, `KY`, `LA`, `ME`, `MD`, 
`MA`, `MI`, `MN`, `MS`, `MO`, `MT`, `NE`, `NV`, `NH`, `NJ`, `NM`, `NY`, `NC`, `ND`, `OH`, `OK`, `OR`, `PA`, `RI`, `SC`, `SD`, `TN`, `TX`,
`UT`, `VT`, `VA`, `WA`, `WV`, `WI`, `WY`];

states = states.map(state => {
  var obj = {};
  obj.key = state;
  obj.text = state;
  obj.value = state;
  return obj;
});

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
<<<<<<< HEAD
=======

>>>>>>> 008791c2636d085c7714267f5e90431b3344ac15
        <Modal.Header>WELCOME TO FITBUD</Modal.Header>
        	<p>Please set up your new profile!</p>
        <Form>
        <Form.Group widths='equal'>
          <Form.Input label='Email' placeholder='Email' />
          <Form.Input label='City' placeholder='City' />
          <Form.Field control={Select} label='State' options={states} placeholder='State' />
        </Form.Group>
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
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