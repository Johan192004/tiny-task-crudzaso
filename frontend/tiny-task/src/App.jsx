import React, { useState, useEffect } from "react";
import {
  getAllTasks,
  createTask,
  updateTaskStatus,
  deleteTask,
} from "./api/tasksApi";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load tasks when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Get all tasks
  const fetchTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getAllTasks();
      setTasks(data);
    } catch (err) {
      setError("Could not load tasks");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Add a new task
  const handleAddTask = async (newTask) => {
    setLoading(true);
    try {
      const response = await createTask(newTask);
      // Response comes in format { success, message, data }
      setTasks([...tasks, response.data]);
    } catch (err) {
      setError("Error creating task");
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Toggle task done status
  const handleToggleDone = async (id) => {
    try {
      const task = tasks.find((t) => t.id === id);
      const response = await updateTaskStatus(id, !task.done);
      // Update task in local state
      setTasks(
        tasks.map((t) =>
          t.id === id ? { ...t, done: response.data.done } : t
        )
      );
    } catch (err) {
      setError("Error updating task");
      console.error(err);
    }
  };

  // Delete a task
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      // Remove task from local state
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) {
      setError("Error deleting task");
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📋 Tiny Tasks</h1>
        <p>Manage your tasks in a simple and fast way</p>
      </header>

      <main className="app-main">
        <AddTaskForm onAddTask={handleAddTask} loading={loading} />
        <TaskList
          tasks={tasks}
          onToggleDone={handleToggleDone}
          onDelete={handleDeleteTask}
          loading={loading}
          error={error}
        />
      </main>

      <footer className="app-footer">
        <p>© 2025 Tiny Tasks. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
