import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="App">
        <h1 className="App-title">Countdown to Christmas: December 25, 2018</h1>
        <section>
          <section className="days">14 days</section>
          <section className="hours">30 hours</section>
          <section className="minutes">15 minutes</section>
          <section className="seconds">20 seconds</section>
        </section>
        <section>
          <input placeholder="new date" />
          <button>Submit</button>
        </section>
      </section>
    )
  }
}

export default App;
