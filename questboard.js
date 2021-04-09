var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskRow = function (_React$Component) {
  _inherits(TaskRow, _React$Component);

  function TaskRow() {
    _classCallCheck(this, TaskRow);

    return _possibleConstructorReturn(this, (TaskRow.__proto__ || Object.getPrototypeOf(TaskRow)).apply(this, arguments));
  }

  _createClass(TaskRow, [{
    key: 'render',
    value: function render() {
      var time = this.props.elapsedTime == 0 ? 'Not started' : this.props.elapsedTime;

      var buttonLabel = !this.props.isPaused ? 'START' : 'PAUSE';

      return React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          this.props.name
        ),
        React.createElement(
          'td',
          null,
          time
        ),
        React.createElement(
          'td',
          null,
          React.createElement(
            'button',
            { onClick: this.props.onTogglePause },
            buttonLabel
          )
        ),
        React.createElement(
          'td',
          null,
          React.createElement('input', { type: 'checkbox' })
        )
      );
    }
  }]);

  return TaskRow;
}(React.Component);

var TaskList = function (_React$Component2) {
  _inherits(TaskList, _React$Component2);

  function TaskList() {
    _classCallCheck(this, TaskList);

    return _possibleConstructorReturn(this, (TaskList.__proto__ || Object.getPrototypeOf(TaskList)).apply(this, arguments));
  }

  _createClass(TaskList, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var rows = [];
      this.props.tasks.forEach(function (task, i) {
        rows.push(React.createElement(TaskRow, { name: task.name,
          elapsedTime: task.elapsedTime,
          isPaused: task.isPaused,
          isDone: task.isDone,
          onTogglePause: function onTogglePause() {
            return _this3.props.onTogglePause(i);
          } }));
      });

      return React.createElement(
        'table',
        null,
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              'Task'
            ),
            React.createElement(
              'th',
              null,
              'Elapsed time'
            ),
            React.createElement(
              'th',
              null,
              'Timer'
            ),
            React.createElement(
              'th',
              null,
              'Done?'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          rows
        )
      );
    }
  }]);

  return TaskList;
}(React.Component);

var TaskInput = function (_React$Component3) {
  _inherits(TaskInput, _React$Component3);

  function TaskInput(props) {
    _classCallCheck(this, TaskInput);

    var _this4 = _possibleConstructorReturn(this, (TaskInput.__proto__ || Object.getPrototypeOf(TaskInput)).call(this, props));

    _this4.state = { taskName: '' };

    _this4.handleChange = _this4.handleChange.bind(_this4);
    _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
    return _this4;
  }

  _createClass(TaskInput, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ taskName: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      this.props.onAddTask(this.state.taskName);
      this.setState({ taskName: '' });
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement('input', { type: 'text', placeholder: 'New task name...', value: this.state.taskName, onChange: this.handleChange }),
        React.createElement('input', { type: 'submit', value: '+' })
      );
    }
  }]);

  return TaskInput;
}(React.Component);

var TodoInfo = function (_React$Component4) {
  _inherits(TodoInfo, _React$Component4);

  function TodoInfo() {
    _classCallCheck(this, TodoInfo);

    return _possibleConstructorReturn(this, (TodoInfo.__proto__ || Object.getPrototypeOf(TodoInfo)).apply(this, arguments));
  }

  _createClass(TodoInfo, [{
    key: 'render',
    value: function render() {
      var numTasks = this.props.tasks.length;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'TODO:'
        ),
        React.createElement(
          'p',
          null,
          numTasks,
          ' task',
          numTasks == 1 ? '' : 's'
        ),
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            numTasks,
            ' not started'
          ),
          React.createElement(
            'li',
            null,
            '0 in progress'
          ),
          React.createElement(
            'li',
            null,
            '0 completed'
          )
        )
      );
    }
  }]);

  return TodoInfo;
}(React.Component);

var QuestBoard = function (_React$Component5) {
  _inherits(QuestBoard, _React$Component5);

  function QuestBoard(props) {
    _classCallCheck(this, QuestBoard);

    var _this6 = _possibleConstructorReturn(this, (QuestBoard.__proto__ || Object.getPrototypeOf(QuestBoard)).call(this, props));

    _this6.state = { tasks: [] };

    _this6.handleAddTask = _this6.handleAddTask.bind(_this6);
    _this6.handleTogglePause = _this6.handleTogglePause.bind(_this6);
    return _this6;
  }

  _createClass(QuestBoard, [{
    key: 'handleAddTask',
    value: function handleAddTask(taskName) {
      this.setState(function (prevState) {
        return {
          tasks: [].concat(_toConsumableArray(prevState.tasks), [{
            'name': taskName,
            'elapsedTime': 0,
            'isPaused': false,
            'isDone': false
          }])
        };
      });
    }
  }, {
    key: 'handleTogglePause',
    value: function handleTogglePause(index) {
      var newTasks = this.state.tasks.slice();
      newTasks[index].isPaused = !newTasks[index].isPaused;
      this.setState({ tasks: newTasks });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Daily Questboard'
        ),
        React.createElement(TodoInfo, { tasks: this.state.tasks }),
        React.createElement(TaskInput, { onAddTask: this.handleAddTask }),
        React.createElement(TaskList, { tasks: this.state.tasks, onTogglePause: this.handleTogglePause })
      );
    }
  }]);

  return QuestBoard;
}(React.Component);

ReactDOM.render(React.createElement(QuestBoard, null), document.getElementById('container'));