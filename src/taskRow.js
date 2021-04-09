import React from 'react';
import './taskRow.css';

class TaskRow extends React.Component {
  render() {
    const time = this.props.elapsedTime === 0 ?
      'Not started' :
      this.props.elapsedTime;

    const buttonLabel = !this.props.isPaused ?
      'START' :
      'PAUSE';

    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{time}</td>
        <td><button onClick={this.props.onTogglePause}>{buttonLabel}</button></td>
        <td><input type="checkbox" /></td>
      </tr>
    );
  }
}

export default TaskRow;
