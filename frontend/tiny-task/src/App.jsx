import React, { useState, useEffect } from "react";
import {
  getAllTasks,
  createTask,
  updateTaskStatus,
  deleteTask,
} from "./api/tasksApi";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      <header className="bg-gray-800 border-b border-gray-700 py-8 shadow-lg">
        <div className="max-w-md mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-2">📋 Tiny Tasks</h1>
          <p className="text-gray-400">Manage your tasks in a simple and fast way</p>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-6">
          <AddTaskForm onAddTask={handleAddTask} loading={loading} />
          <TaskList
            tasks={tasks}
            onToggleDone={handleToggleDone}
            onDelete={handleDeleteTask}
            loading={loading}
            error={error}
          />
        </div>
      </main>

      <footer className="bg-gray-800 border-t border-gray-700 py-4 text-center text-gray-500 text-sm">
        <p>© 2025 Tiny Tasks. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
