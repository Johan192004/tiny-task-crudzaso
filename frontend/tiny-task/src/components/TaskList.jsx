import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onToggleDone, onDelete, loading, error }) => {
  if (loading) {
    return <div className="flex items-center justify-center py-8 text-lg text-gray-400">Loading tasks...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center py-8 text-lg text-red-500">Error: {error}</div>;
  }

  if (tasks.length === 0) {
    return <div className="flex items-center justify-center py-8 text-lg text-gray-400">No tasks. Create one!</div>;
  }

  return (
    <div className="space-y-3 w-full max-w-md">
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
