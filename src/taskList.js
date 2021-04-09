import React from 'react';
import './taskList.css';
import TaskRow from './taskRow';

class TaskList extends React.Component {
  render() {
    const rows = [];
    this.props.tasks.forEach((task, i) => {
      rows.push(
        <TaskRow name={task.name}
          elapsedTime={task.elapsedTime}
          isPaused={task.isPaused}
          isDone={task.isDone}
          onTogglePause={() => this.props.onTogglePause(i)} />
      );
    });


    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Elapsed time</th>
            <th>Timer</th>
            <th>Done?</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default TaskList;
