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
			displaySetup: true,
      email: null,
      city: null,
      state: null,
      activity: null
		}
    this.updateState = this.updateState.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.updateActivity = this.updateActivity.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
	}

	closeDisplay() {
		this.setState({
			displaySetup: false
		});
		this.props.history.replace('/profile');
	}

  updateEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  updateCity(e){
    this.setState({
      city: e.target.value
    })
  }

  updateState(e){
    this.setState({
      state: e.target.innerText
    })
  }

  updateActivity(e){
    this.setState({
      activity: e.target.value
    })
  }

  sendRequest() {
    var inputs = {
      email: this.state.email,
      city: this.state.city,
      state: this.state.state,
      activity: this.state.activity
    }
    console.log('here is my FORM DATA', inputs)
  }

	render() {
		return (
			<Modal open={this.state.displaySetup} closeIcon dimmer='blurring'>
        <Modal.Header>Tell us about you</Modal.Header>
        	<p>Please set up your profile!</p>
        <Form>
        <Form.Group widths='equal'>
          <Form.Input label='Email' placeholder='Email' value={this.state.email} onChange={this.updateEmail}/>
          <Form.Input label='City' placeholder='City' value={this.state.city} onChange={this.updateCity}/>
          <Form.Field control={Select} label='State' options={states} placeholder='State' onChange={this.updateState}/>
        </Form.Group>
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' value={this.state.activity} onChange={this.updateActivity}/>
        </Form>

        <Modal.Actions>
          <Button primary onClick={this.sendRequest}>
            Update
          </Button>
          <Button secondary onClick={this.closeDisplay.bind(this)}>
            Later <Icon name='close' />
          </Button>
        </Modal.Actions>
      </Modal>
		)
	}
}

export default Setup;
