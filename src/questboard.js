class TaskRow extends React.Component {
  render() {
    const time = this.props.elapsedTime == 0 ?
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

class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {taskName: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({taskName: event.target.value});
  }

  handleSubmit(event) {
    this.props.onAddTask(this.state.taskName);
    this.setState({taskName: ''});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="New task name..." value={this.state.taskName} onChange={this.handleChange} />
        <input type="submit" value="+"/>
      </form>
    );
  }
}

class TodoInfo extends React.Component {
  render() {
    const numTasks = this.props.tasks.length;

    return (
      <div>
        <h2>TODO:</h2>
        <p>{numTasks} task{numTasks == 1 ? '' : 's'}</p>
        <ul>
          <li>{numTasks} not started</li>
          <li>0 in progress</li>
          <li>0 completed</li>
        </ul>
      </div>
    );
  }
}

class QuestBoard extends React.Component {
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
      <div>
        <h1>Daily Questboard</h1>
        <TodoInfo tasks={this.state.tasks}/>
        <TaskInput onAddTask={this.handleAddTask} />
        <TaskList tasks={this.state.tasks} onTogglePause={this.handleTogglePause}/>
      </div>
    );
  }
}

ReactDOM.render(
  <QuestBoard />,
  document.getElementById('container')
);
