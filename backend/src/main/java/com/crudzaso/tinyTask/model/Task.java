package com.crudzaso.tinyTask.model;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class Task {
    private int id;

    @NotNull(message = "string (required, ≥3 chars)")
    @Size(min = 3, message = "string (required, ≥3 chars)")
    private String title;
    private boolean done;
    
    public Task(int id, String title, boolean done) {
        this.id = id;
        this.title = title;
        this.done = done;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

}
