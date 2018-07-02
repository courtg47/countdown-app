import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

/**
* @description Class which builds the main Application
* @constructor
*/
class App extends Component {

  /**
  * @description Contains props and sets default state of deadLine
  * @constructor
  */
  constructor(props) {
    super(props);
    this.state = {
      deadLine: 'January 1, 2019'
    };
  }

  /**
  * @description Handles the input field when user submits via enter key
  * @param {e} event - Key press event
  * @returns {function} - Triggers changeDeadline function
  */
  handleSubmit = (e) => {
    e.preventDefault();
    this.changeDeadline();
  }

  /**
  * @description Changes the state of the countdown date or throws error
  * @returns {string} - new countdown date
  * @returns {string} - error message
  */
  changeDeadline() {
    this.setState({
      deadLine: this.state.newDeadline,
      error: this.state.error
    })
  }

  /**
  * @description renders the app on the DOM
  */
  render() {
    return (
      <main className="main-app">

        // Main title of app
        <h1 className="app-title">Countdown to {this.state.deadLine}</h1>

        // Implementing Clock component from Clock.jsx
        <Clock deadLine={this.state.deadLine}/>

        // Input form with button
        <Form inline onSubmit={this.handleSubmit}>
          <FormControl className="deadline-input" onChange={event => this.setState({newDeadline: event.target.value})} placeholder="New Date" />
          <Button className="submit" onClick={() => this.changeDeadline()} onKeyUp={this.handleKeyUp}>Get New Countdown</Button>
        </Form>

      </main>
    )
  }
}

export default App;
