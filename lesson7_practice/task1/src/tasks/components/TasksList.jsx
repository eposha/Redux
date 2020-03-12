import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sortedTasksListSelector } from "../tasks.selectors";
import * as tasksAction from "../tasks.actions";
import CreateTaskInput from "./CreateTaskInput";
import Task from "./Task";

class TasksList extends React.Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.props.createTask} />
        <ul className="list">
          {this.props.tasks.map(task => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.props.deleteTask}
              onChange={this.props.updateTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: sortedTasksListSelector(state)
  };
};

TasksList.propTypes = {
  getTaskList: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape())
};

export default connect(mapStateToProps, tasksAction)(TasksList);
