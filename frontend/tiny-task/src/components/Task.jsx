import React from "react";
import "../styles/Task.css";

const Task = ({ task, onToggleDone, onDelete }) => {
  return (
    <div className={`task ${task.done ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggleDone(task.id)}
        className="task-checkbox"
      />
      <span className="task-title">{task.title}</span>
      <button 
        onClick={() => onDelete(task.id)} 
        className="task-delete-btn"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
