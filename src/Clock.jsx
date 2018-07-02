import React, { Component } from 'react';
import './App.css';

/**
* @description Creates Clock class which builds the countdown clock
* @constructor
*/
class Clock extends Component {

  /**
  * @description Sets initial state of the countdown clock and error message
  * @constructor
  * @param {props} - props
  */
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

  /**
  * @description Get the values needed for the clock and render onscreen,
  * Upon mounting of the Clock component
  * @return {function} Triggers the getTimeUntil function with the current
  * countdown date
  */
  componentWillMount() {
    this.getTimeUntil(this.props.deadLine);
  }

  /**
  * @description Count down the time by each second, after Clock component
  * has mounted.
  */
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadLine), 1000);
  }

  /**
  * @description Add a 0 to the number value of any part of the Countdown
  * clock, if number is a single digit
  * @param {number} - number of days, hours, minutes, or seconds
  * @return {number} - number of days, hours, minutes, or seconds
  */
  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  /**
  * @description Find the remaining days, hours, minutes and seconds from
  * today's date and time to the countdown deadline. If the date entered isn't
  * valid, throw an error message
  * @param {date} - Countdown deadLine
  * @param {string} - Error message
  * @returns {date} - Days, hours, minues, and seconds remaining
  * @returns {string} - Error message if required
  */
  getTimeUntil(deadLine, error) {
    // Find difference between today's date and deadline
    const time = Date.parse(deadLine) - Date.parse(new Date());

    // Parse the days, minutes, hours, and seconds from the time difference
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000 * 60 * 60) % 24);
    const days = Math.floor(time/(1000 * 60 * 60 * 24));

    // If date is not valid, throw error message
    if (isNaN(time)) {
      this.setState({error: "*Please enter a valid date*"});
      this.setState({days: 0, hours: 0, minutes: 0, seconds: 0});

      // If date entered is in the past, throw an error message
    } else if (minutes < 0) {
      this.setState({error: "*Please enter a date in the future*"});
      this.setState({days: 0, hours: 0, minutes: 0, seconds: 0});

      // If date is valid, render details on screen with no error message
    } else {
      this.setState({error: ""});
      this.setState({days, hours, minutes, seconds});
    }
  }

  /**
  * @description Render the clock component on screen
  */
  render() {
    return (
      <section>
        // Error message, if any required
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
