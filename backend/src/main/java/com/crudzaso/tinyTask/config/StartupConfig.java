package com.crudzaso.tinyTask.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.crudzaso.tinyTask.repository.ITaskRepository;
import com.crudzaso.tinyTask.repository.TaskRepository;

@Configuration
public class StartupConfig {

    @Bean
    public TaskRepository taskRepository() {
        return new ITaskRepository();
    }

    @Bean
    public CommandLineRunner loadInitialData(TaskRepository taskRepository) {
        return args -> {
            taskRepository.createTask("Tarea inicial 1");
            taskRepository.createTask("Tarea inicial 2");
        };
    }

}
