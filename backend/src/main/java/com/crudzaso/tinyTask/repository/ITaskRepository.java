package com.crudzaso.tinyTask.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.crudzaso.tinyTask.model.Task;

public class ITaskRepository implements TaskRepository {
    private final HashMap<Integer, Task> taskStorage = new HashMap<>();
    private int currentId = 1;

    @Override
    public List<Task> getAllTasks() {
        return new ArrayList<>(taskStorage.values());
    }

    @Override
    public Task createTask(String title) {
        Task newTask = new Task(currentId++, title, false);
        taskStorage.put(newTask.getId(), newTask);
        return newTask;
    }

    @Override
    public Task updateTaskStatus(int id, boolean done) {
        
        Task task = taskStorage.get(id);
        if (task != null) {
            task.setDone(done);
        }
        return task;
    }

    @Override
    public boolean deleteTask(int id) {
        return taskStorage.remove(id) != null;
    }
    
}
