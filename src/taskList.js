import React from 'react';
import './taskList.css';
import TaskRow from './taskRow';

class TaskList extends React.Component {
  render() {
    const rows = [];
    this.props.tasks.forEach((task) => {
      rows.push(
        <TaskRow name={task.name}
          isDone={task.isDone} />
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
