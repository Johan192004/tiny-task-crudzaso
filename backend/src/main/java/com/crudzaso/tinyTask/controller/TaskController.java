package com.crudzaso.tinyTask.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crudzaso.tinyTask.model.Task;
import com.crudzaso.tinyTask.service.TaskService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/todos")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Integer id) {
        boolean deleted = taskService.deleteTask(id);

        if (!deleted) {
            return ResponseEntity
                    .status(404)
                    .body(Map.of("error", "Not found"));
        }

        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<?> createTask(@Valid @RequestBody Task task) {
        Task returnTask = taskService.createTask(task);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of("success", true, "message", "Task created", "data", returnTask));
    }

    @PutMapping("/{id}/toggle")
    public ResponseEntity<?> updateTaskStatus(@PathVariable Integer id, @RequestBody Map<String, Boolean> status) {
        if (!status.containsKey("done")) {
            return ResponseEntity
                    .badRequest()
                    .body(Map.of("error", "'done' field is required"));
        }

        Task updatedTask = taskService.updateTaskStatus(id, status.get("done"));

        if (updatedTask == null) {
            return ResponseEntity
                    .status(404)
                    .body(Map.of("error", "Not found"));
        }

        return ResponseEntity.ok()
                .body(Map.of("success", true, "message", "Task updated", "data", updatedTask));
    }

}
