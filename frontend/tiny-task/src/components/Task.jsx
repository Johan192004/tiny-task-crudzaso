import React from "react";

const Task = ({ task, onToggleDone, onDelete }) => {
  return (
    <div className={`flex items-center gap-3 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors ${task.done ? "opacity-60" : ""}`}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggleDone(task.id)}
        className="w-5 h-5 rounded accent-blue-500 cursor-pointer"
      />
      <span className={`flex-1 text-sm font-medium ${task.done ? "line-through text-gray-500" : "text-gray-100"}`}>{task.title}</span>
      <button 
        onClick={() => onDelete(task.id)} 
        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded transition-colors duration-200"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
