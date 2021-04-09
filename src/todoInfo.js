import React from 'react';
import './todoInfo.css';

class TodoInfo extends React.Component {
  render() {
    const numTasks = this.props.tasks.length;

    return (
      <div>
        <h2>TODO:</h2>
        <p>{numTasks} task{numTasks === 1 ? '' : 's'}</p>
        <ul>
          <li>{numTasks} not started</li>
          <li>0 in progress</li>
          <li>0 completed</li>
        </ul>
      </div>
    );
  }
}

export default TodoInfo;
