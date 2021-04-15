import React from 'react';
import './taskRow.css';

class TaskRow extends React.Component {
  constructor(props) {
    super(props);

    this.handleTogglePause = this.handleTogglePause.bind(this);
    this.handleToggleDone = this.handleToggleDone.bind(this);
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

  handleTogglePause() {
    if (!this.props.isPaused) {
      clearInterval(this.interval);
    }
    else {
      this.interval = setInterval(() => this.props.tick(), 1000);
    }

    this.props.onTogglePause();
  }

  handleToggleDone() {
    if (!this.props.isPaused) {
      this.handleTogglePause();
    }

    this.props.onToggleDone();
  }

  render() {
    const buttonLabel = this.props.isPaused ?
      'START' :
      'PAUSE';

    const time = this.props.seconds === 0 && this.props.isPaused ?
      'Not started' :
      this.formatTime(this.props.seconds);

    return (
      <tr className={this.props.isDone ? 'taskRow done' : 'taskRow'}>
        <td><span className={this.props.isDone ? 'done' : ''}>{this.props.name}</span></td>
        <td><span className={this.props.isPaused ? 'paused' : ''}>{time}</span></td>
        <td><button onClick={this.handleTogglePause} disabled={this.props.isDone ? 'disabled' : ''}>{buttonLabel}</button></td>
          <td><input type="checkbox" checked={this.props.isDone ? 'checked' : ''} onChange={this.handleToggleDone}/></td>
      </tr>
    );
  }
}

export default TaskRow;
