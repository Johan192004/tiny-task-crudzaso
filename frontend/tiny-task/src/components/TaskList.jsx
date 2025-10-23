import React from "react";
import Task from "./Task";
import "../styles/TaskList.css";

const TaskList = ({ tasks, onToggleDone, onDelete, loading, error }) => {
  if (loading) {
    return <div className="loading">Loading tasks...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (tasks.length === 0) {
    return <div className="empty">No tasks. Create one!</div>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
