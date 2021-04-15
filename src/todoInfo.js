import React from 'react';
import './todoInfo.css';

class TodoInfo extends React.Component {
  render() {
    const numTasks = this.props.tasks.length;
    const numInProgress = this.props.tasks.reduce((count, item) =>
      (item.seconds > 0 || (item.seconds === 0 && !item.isPaused)) && !item.isDone ?
      ++count : count, 0);
    const numDone = this.props.tasks.reduce((count, item) => item.isDone ? ++count : count, 0);

    return (
      <div className="todoInfo">
        <span className="label">TODO:</span>
        <p>{numTasks} task{numTasks === 1 ? '' : 's'}</p>
        <ul>
          <li>{numTasks - numInProgress - numDone} in backlog</li>
          <li>{numInProgress} in progress</li>
          <li>{numDone} completed</li>
        </ul>
      </div>
    );
  }
}

export default TodoInfo;
