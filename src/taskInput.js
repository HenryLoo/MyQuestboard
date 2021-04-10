import React from 'react';
import './taskInput.css';

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
    if (this.state.taskName !== '') {
      this.props.onAddTask(this.state.taskName);
      this.setState({taskName: ''});
    }

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

export default TaskInput;
