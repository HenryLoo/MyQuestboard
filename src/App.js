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
    this.handleTogglePause = this.handleTogglePause.bind(this);
  }

  handleAddTask(taskName) {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, {
        'name': taskName,
        'elapsedTime': 0,
        'isPaused': false,
        'isDone': false
      }]
    }));
  }

  handleTogglePause(index) {
    const newTasks = this.state.tasks.slice();
    newTasks[index].isPaused = !newTasks[index].isPaused;
    this.setState({tasks: newTasks});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Daily Questboard</p>
          <TodoInfo tasks={this.state.tasks}/>
        </header>
        <TaskInput onAddTask={this.handleAddTask} />
        <TaskList tasks={this.state.tasks} onTogglePause={this.handleTogglePause}/>
      </div>
    );
  }
}

export default App;
