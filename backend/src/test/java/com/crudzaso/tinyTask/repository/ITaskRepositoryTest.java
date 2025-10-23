package com.crudzaso.tinyTask.repository;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import com.crudzaso.tinyTask.model.Task;

@DisplayName("ITaskRepository Unit Tests (JUnit 5)")
class ITaskRepositoryTest {
    
    private ITaskRepository taskRepository;

    @BeforeEach
    void setUp() {
        taskRepository = new ITaskRepository();
    }

    // Generate IDs - Positive case
    @Test
    @DisplayName("Auto-incremented and unique IDs")
    void testGenerateIdsPositive() {
        // Act
        Task task1 = taskRepository.createTask("First Task");
        Task task2 = taskRepository.createTask("Second Task");
        Task task3 = taskRepository.createTask("Third Task");
        
        // Assert
        assertEquals(1, task1.getId());
        assertEquals(2, task2.getId());
        assertEquals(3, task3.getId());
        assertNotEquals(task1.getId(), task2.getId());
        assertNotEquals(task2.getId(), task3.getId());
    }

    // Find by ID - Positive case
    @Test
    @DisplayName("Returns Optional with value")
    void testFindByIdPositive() {
        // Arrange
        Task createdTask = taskRepository.createTask("Find Me");
        int taskId = createdTask.getId();
        
        // Act
        Task foundTask = taskRepository.updateTaskStatus(taskId, false);
        
        // Assert
        assertNotNull(foundTask);
        assertEquals(taskId, foundTask.getId());
        assertEquals("Find Me", foundTask.getTitle());
    }

    // Find by ID - Negative case
    @Test
    @DisplayName("Returns null")
    void testFindByIdNegative() {
        // Arrange
        int nonExistentId = 999;
        
        // Act
        Task foundTask = taskRepository.updateTaskStatus(nonExistentId, false);
        
        // Assert
        assertNull(foundTask);
    }
}
