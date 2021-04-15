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
    this.handleToggleDone = this.handleToggleDone.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleAddTask(taskName) {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, {
        'name': taskName,
        'seconds': 0,
        'isPaused': true,
        'isDone': false
      }]
    }));
  }

  tick(id) {
    const newTasks = this.state.tasks.slice();
    newTasks[id].seconds++;
    this.setState({
      tasks: newTasks
    });
  }

  handleTogglePause(id) {
    const newTasks = this.state.tasks.slice();
    newTasks[id].isPaused = !newTasks[id].isPaused;
    this.setState({
      tasks: newTasks
    });
  }

  handleToggleDone(id) {
    const newTasks = this.state.tasks.slice();
    newTasks[id].isDone = !newTasks[id].isDone;
    this.setState({
      tasks: newTasks
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header dark">
          <h1>Daily Questboard</h1>
        </header>
        <div className="row">
          <div className="col-2">
              <div className="panel light">
              <TodoInfo tasks={this.state.tasks}/>
              <TaskInput onAddTask={this.handleAddTask} />
            </div>
          </div>
          <div className="col-10">
            <div className="panel light">
              <TaskList tasks={this.state.tasks}
                onTogglePause={this.handleTogglePause}
                onToggleDone={this.handleToggleDone}
                tick={this.tick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
