package com.crudzaso.tinyTask.repository;

import java.util.List;

import com.crudzaso.tinyTask.model.Task;

public interface TaskRepository {
    List<Task> getAllTasks();
    Task createTask(String title);
    Task updateTaskStatus(int id, boolean done);
    boolean deleteTask(int id);
}
