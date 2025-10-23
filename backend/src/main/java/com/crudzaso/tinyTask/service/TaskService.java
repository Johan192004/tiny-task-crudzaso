package com.crudzaso.tinyTask.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.crudzaso.tinyTask.model.Task;
import com.crudzaso.tinyTask.repository.TaskRepository;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllTasks() {
        return taskRepository.getAllTasks();
    }

    public Task createTask(Task task) {
        return taskRepository.createTask(task.getTitle());
    }

    public Task updateTaskStatus(int id, boolean done) {
        return taskRepository.updateTaskStatus(id, done);
    }

    public boolean deleteTask(int id) {
        return taskRepository.deleteTask(id);
    }

}
