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

  handleSubmit = (e) => {
    e.preventDefault();
    this.changeDeadline();
  }

  changeDeadline() {
    this.setState({
      deadLine: this.state.newDeadline,
      error: this.state.error
    })
  }

  render() {
    return (
      <main className="main-app">
        <h1 className="app-title">Countdown to {this.state.deadLine}</h1>
        <Clock deadLine={this.state.deadLine}/>
        <Form inline onSubmit={this.handleSubmit}>
          <FormControl className="deadline-input" onChange={event => this.setState({newDeadline: event.target.value})} placeholder="New Date" />
          <Button className="submit" onClick={() => this.changeDeadline()} onKeyUp={this.handleKeyUp}>Get New Countdown</Button>
        </Form>
      </main>
    )
  }
}

export default App;
