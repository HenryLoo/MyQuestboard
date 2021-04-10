import React from 'react';
import './App.css';
import TodoInfo from './todoInfo';
import TaskInput from './taskInput';
import TaskList from './taskList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasks: []};

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(taskName) {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, {
        'name': taskName,
        'isDone': false
      }]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Daily Questboard</p>
          <TodoInfo tasks={this.state.tasks}/>
        </header>
        <TaskInput onAddTask={this.handleAddTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
