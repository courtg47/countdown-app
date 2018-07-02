import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
  render() {
    return (
      <section>
        <section className="days">{this.state.days} days</section>
        <section className="hours">{this.state.hours} hours</section>
        <section className="minutes">{this.state.minutes} minutes</section>
        <section className="seconds">{this.state.seconds} seconds</section>
      </section>
    )
  }

}

export default Clock;
