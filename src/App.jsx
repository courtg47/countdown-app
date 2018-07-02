import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadLine: 'January 1, 2019'
    };
  }

  changeDeadline() {
    this.setState({
      deadLine: this.state.newDeadline,
      error: this.state.error
    })
  }

  render() {
    return (
      <section className="App">
        <h1 className="App-title">Countdown to {this.state.deadLine}</h1>
        <Clock deadLine={this.state.deadLine}/>
        <Form inline>
          <FormControl className="deadline-input" onChange={event => this.setState({newDeadline: event.target.value})} placeholder="new date" />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </section>
    )
  }
}

export default App;
