import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Picture from './Picture';
import DashNav from './DashNav';
import Workouts from './Workouts';
import Requests from './Requests';
import Invites from './Invites';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'my workouts',
      data: [],
      var: true
    };

    this.handleTabClick = this.handleTabClick.bind(this);
    this.update = this.update.bind(this);
    this.dataPull = this.dataPull.bind(this);
  }

  dataPull() {
    fetch('/dashboard', { credentials: "include" })
      .then(response => response.json())
      .then(response => {

        this.setState({ data: response })
      })

  }

  update = (userid) => {

    fetch(`/postings/accept/${userid}`, { method: "PATCH" })
      .then(response => {
        var newVar = !this.state.var;
        this.setState({ var: newVar });
        this.dataPull();
      })

    var id = this.props.postingId;

    fetch(`/postings/requests/${id}`, { credentials: "include" })
      .then(response => response.json())
      .then(response => {

        this.setState({ requests: response })
      })

  }

  handleTabClick(e, { name }) {
    this.setState({ view: name });
  };

  componentDidMount() {
    this.dataPull();
  }

  images = ['daniel.jpg', 'elliot.jpg', 'matthew.png', 'rachel.png'];
  user = '/' + this.images[Math.floor(Math.random() * this.images.length)];

  render() {
    // var { listings } = this.props;

    return (
      <Container style={{marginTop: '20px'}}>

        <Picture user={this.user}/>

        <DashNav handleClick={this.handleTabClick} view={this.state.view}/>

        {this.state.view === 'my workouts' && (<Workouts data={this.state.data} user={this.user} update={this.update} dataPull={this.dataPull} />)}
        {this.state.view === 'my requests' && ([<Requests />])}
        {this.state.view === 'upcoming workouts' && ([<Invites />])}

      </Container>
    )
  }
}

export default Dashboard;

//profile pic
  //username
//
