import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      error: ""
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadLine);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadLine), 1000);
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadLine, error) {
    const time = Date.parse(deadLine) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000 * 60 * 60) % 24);
    const days = Math.floor(time/(1000 * 60 * 60 * 24));
    console.log(minutes);

    if (minutes < 0) {
      this.setState({error: "Please enter a date in the future."});
      this.setState({days: 0, hours: 0, minutes: 0, seconds: 0});
    } else {
      this.setState({error: ""});
      this.setState({days, hours, minutes, seconds});
    }
  }

  render() {
    return (
      <section>
        <section className="error">{this.state.error}</section>
        <section className="days">{this.leading0(this.state.days)} days</section>
        <section className="hours">{this.leading0(this.state.hours)} hours</section>
        <section className="minutes">{this.leading0(this.state.minutes)} minutes</section>
        <section className="seconds">{this.leading0(this.state.seconds)} seconds</section>
      </section>
    )
  }

}

export default Clock;
