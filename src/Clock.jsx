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

  componentWillMount() {
    this.getTimeUntil(this.props.deadLine);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadLine), 1000);
  }

  getTimeUntil(deadLine) {
    const time = Date.parse(deadLine) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000 * 60 * 60) % 24);
    const days = Math.floor(time/(1000 * 60 * 60 * 24));
    console.log(time);

    this.setState({days, hours, minutes, seconds});
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
