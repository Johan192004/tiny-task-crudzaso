import React, { useState } from "react";
import "../styles/AddTaskForm.css";

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
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Write a new task..."
        className="task-input"
        disabled={loading}
      />
      <button type="submit" className="btn-add" disabled={loading}>
        {loading ? "Adding..." : "Add"}
      </button>
      {error && <div className="form-error">{error}</div>}
    </form>
  );
};

export default AddTaskForm;
