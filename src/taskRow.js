import React from 'react';
import './taskRow.css';

class TaskRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'seconds': 0, 'isPaused': true}

    this.handleTogglePause = this.handleTogglePause.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  formatTime(time) {
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor((time - (hours * 3600)) / 60);
    var seconds = time - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return hours + ':' + minutes + ':' + seconds;
  }

  tickSeconds() {
    this.setState(prevState => ({
      'seconds': prevState.seconds + 1
    }));
  }

  handleTogglePause() {
    if (!this.state.isPaused) {
      clearInterval(this.interval);
    }
    else {
      this.interval = setInterval(() => this.tickSeconds(), 1000);
    }

    this.setState(prevState => ({
      'isPaused': !prevState.isPaused
    }));
  }

  render() {
    const buttonLabel = this.state.isPaused ?
      'START' :
      'PAUSE';

    const time = this.state.seconds === 0 ?
      'Not started' :
      this.formatTime(this.state.seconds);

    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{time}</td>
        <td><button onClick={this.handleTogglePause}>{buttonLabel}</button></td>
        <td><input type="checkbox" /></td>
      </tr>
    );
  }
}

export default TaskRow;
