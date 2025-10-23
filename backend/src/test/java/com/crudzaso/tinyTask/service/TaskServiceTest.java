package com.crudzaso.tinyTask.service;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import com.crudzaso.tinyTask.model.Task;
import com.crudzaso.tinyTask.repository.ITaskRepository;

@DisplayName("TaskService Unit Tests (JUnit 5)")
class TaskServiceTest {
    
    private TaskService taskService;
    private ITaskRepository taskRepository;

    @BeforeEach
    void setUp() {
        taskRepository = new ITaskRepository();
        taskService = new TaskService(taskRepository);
    }

    // Create task - Positive case
    @Test
    @DisplayName("Create task with valid title - done=false")
    void testCreateTaskPositive() {
        // Arrange
        Task newTask = new Task(0, "Valid Task", false);
        
        // Act
        Task createdTask = taskService.createTask(newTask);
        
        // Assert
        assertNotNull(createdTask);
        assertEquals("Valid Task", createdTask.getTitle());
        assertFalse(createdTask.isDone());
    }

    // Create task - Negative case
    @Test
    @DisplayName("Create task with empty title - throws exception")
    void testCreateTaskNegative() {
        // Arrange
        Task invalidTask = new Task(0, "", false);
        
        // Act & Assert
        assertThrows(Exception.class, () -> {
            taskService.createTask(invalidTask);
        });
    }

    // Toggle status - Positive case
    @Test
    @DisplayName("Toggle status: false → true")
    void testToggleTaskStatusPositive() {
        // Arrange
        Task createdTask = taskService.createTask(new Task(0, "Task to Toggle", false));
        int taskId = createdTask.getId();
        
        // Act
        Task updatedTask = taskService.updateTaskStatus(taskId, true);
        
        // Assert
        assertNotNull(updatedTask);
        assertTrue(updatedTask.isDone());
    }

    // Toggle status - Negative case
    @Test
    @DisplayName("Toggle status with non-existent ID - returns null")
    void testToggleTaskStatusNegative() {
        // Arrange
        int nonExistentId = 999;
        
        // Act
        Task updatedTask = taskService.updateTaskStatus(nonExistentId, true);
        
        // Assert
        assertNull(updatedTask);
    }

    // Delete task - Positive case
    @Test
    @DisplayName("Delete task - removes element and list reflects the change")
    void testDeleteTaskPositive() {
        // Arrange
        Task createdTask = taskService.createTask(new Task(0, "Task to Delete", false));
        int taskId = createdTask.getId();
        
        // Act
        boolean deleted = taskService.deleteTask(taskId);
        
        // Assert
        assertTrue(deleted);
        assertEquals(0, taskService.getAllTasks().size());
    }

    // Delete task - Negative case
    @Test
    @DisplayName("Delete task with non-existent ID - returns false")
    void testDeleteTaskNegative() {
        // Arrange
        int nonExistentId = 999;
        
        // Act
        boolean deleted = taskService.deleteTask(nonExistentId);
        
        // Assert
        assertFalse(deleted);
    }
}
