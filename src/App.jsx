import React, { Component } from 'react';
import Clock from './Clock'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadLine: 'December 25, 2018'
    };
  }

  changeDeadline() {
    this.setState({
      deadLine: this.state.newDeadline
    })
  }

  render() {
    return (
      <section className="App">
        <h1 className="App-title">Countdown to Christmas: {this.state.deadLine}</h1>
        <Clock />
        <section>
          <input onChange={event => this.setState({newDeadline: event.target.value})} placeholder="new date" />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </section>
      </section>
    )
  }
}

export default App;
