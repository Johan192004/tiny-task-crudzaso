import React, { useState } from "react";

const AddTaskForm = ({ onAddTask, loading }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (title.trim().length === 0) {
      setError("Task title cannot be empty");
      return;
    }

    if (title.trim().length < 3) {
      setError("Title must be at least 3 characters");
      return;
    }

    try {
      await onAddTask({ title: title.trim(), done: false });
      setTitle("");
    } catch (err) {
      setError("Error creating task. Try again.");
    }
  };

  return (
    <form className="w-full max-w-md space-y-3" onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write a new task..."
          className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
          disabled={loading}
        />
        <button 
          type="submit" 
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors duration-200 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>
      {error && <div className="text-red-500 text-sm font-medium">{error}</div>}
    </form>
  );
};

export default AddTaskForm;
