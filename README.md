# TinyTask - Task Management Application

A full-stack web application for managing tasks efficiently. Built with Spring Boot for the backend and React with Vite for the frontend.

## Project Overview

TinyTask is a simple yet powerful task management application that allows users to:
- Create new tasks with descriptions
- Mark tasks as completed or pending
- Delete tasks
- View all tasks in a clean, organized interface

## Tech Stack

### Backend
- **Framework**: Spring Boot 3.4.11
- **Language**: Java 21
- **Build Tool**: Maven
- **Testing**: JUnit 5 (Jupiter)
- **Dependencies**:
  - Spring Boot Web Starter
  - Spring Boot Test
  - JUnit 5

### Frontend
- **Framework**: React
- **Build Tool**: Vite
- **Styling**: CSS
- **Package Manager**: npm

## Project Structure

```
tinyTask/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/crudzaso/tinyTask/
│   │   │   │   ├── TinyTaskApplication.java
│   │   │   │   ├── config/
│   │   │   │   ├── controller/
│   │   │   │   │   ├── Task.java (DTO)
│   │   │   │   │   └── TaskController.java
│   │   │   │   ├── model/
│   │   │   │   │   └── Task.java
│   │   │   │   ├── repository/
│   │   │   │   │   ├── ITaskRepository.java
│   │   │   │   │   └── TaskRepository.java
│   │   │   │   └── service/
│   │   │   │       └── TaskService.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   │       └── java/com/crudzaso/tinyTask/
│   │           ├── service/TaskServiceTest.java
│   │           ├── repository/ITaskRepositoryTest.java
│   │           └── TinyTaskApplicationTests.java
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── Task.jsx
│   │   │   ├── AddTaskForm.css
│   │   │   ├── TaskList.css
│   │   │   └── Task.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Java 21 or higher
- Node.js 16 or higher
- Maven 3.8.9 or higher
- npm 8 or higher

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build the project:
```bash
mvn clean install
```

3. Run the application:
```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will typically start on `http://localhost:5173`

## API Endpoints

### Get All Tasks
```
GET /api/tasks
```
Returns a list of all tasks.

### Create Task
```
POST /api/tasks
Content-Type: application/json

{
  "title": "Task title"
}
```
Creates a new task with the provided title.

### Update Task Status
```
PUT /api/tasks/{id}/status
Content-Type: application/json

{
  "done": true
}
```
Updates the completion status of a task.

### Delete Task
```
DELETE /api/tasks/{id}
```
Deletes a task by ID.

## Running Tests

### Backend Tests

Run all tests:
```bash
cd backend
mvn test
```

Test Coverage:
- **TaskService Tests**: 6 unit tests
  - Create task (positive and negative cases)
  - Toggle task status (positive and negative cases)
  - Delete task (positive and negative cases)

- **ITaskRepository Tests**: 3 unit tests
  - ID generation
  - Find by ID (positive and negative cases)

- **Application Tests**: 1 integration test

**Total**: 10 unit tests, all passing ✓

### Frontend Tests

To add and run frontend tests (when configured):
```bash
cd frontend
npm run test
```

## Features

### Task Management
- ✓ Create new tasks with validation (title cannot be empty)
- ✓ View all tasks in a clean list view
- ✓ Toggle task completion status
- ✓ Delete tasks from the list
- ✓ Real-time UI updates

### Backend Features
- ✓ RESTful API endpoints
- ✓ Input validation
- ✓ Exception handling
- ✓ Comprehensive unit test coverage
- ✓ In-memory task storage (expandable to database)

### Frontend Features
- ✓ Responsive design with CSS styling
- ✓ Form validation for task creation
- ✓ Interactive task list
- ✓ Delete and toggle buttons
- ✓ Clean and intuitive user interface

## Validation & Error Handling

### Backend Validation
- Task title validation: Title cannot be null or empty
- Throws `IllegalArgumentException` for invalid inputs
- Returns `null` for non-existent task operations
- Returns `false` for failed deletion attempts

### Frontend Validation
- Task title input field is required
- Form submission validation before API calls
- User-friendly error messages

## Development Guidelines

### Code Standards
- Follow Java naming conventions for backend code
- Use React functional components with hooks
- Maintain consistent CSS naming conventions
- Write unit tests for new features

### Adding New Features

1. **Backend**:
   - Create new methods in the appropriate service/repository
   - Add unit tests for new functionality
   - Update the controller endpoints if needed

2. **Frontend**:
   - Create new React components
   - Add corresponding CSS files
   - Integrate with API endpoints

## File Descriptions

### Backend Classes

**TaskService.java**
- Main service class for business logic
- Handles task operations (create, update, delete)
- Validates input before delegating to repository

**TaskRepository.java**
- Implements the ITaskRepository interface
- Manages in-memory task storage
- Handles task persistence operations

**TaskController.java**
- REST controller for HTTP endpoints
- Maps URL routes to service methods
- Handles request/response serialization

**Task.java (Model)**
- Entity class representing a task
- Contains id, title, and done status

**Task.java (DTO)**
- Data Transfer Object for API requests
- Used for task creation and updates

### Frontend Components

**App.jsx**
- Main application component
- Manages overall application state
- Renders main layout

**AddTaskForm.jsx**
- Form component for creating new tasks
- Handles form submission
- Validates user input

**TaskList.jsx**
- Container component for displaying tasks
- Renders list of Task components
- Manages task list operations

**Task.jsx**
- Individual task item component
- Displays task information
- Handles toggle and delete actions

## Future Enhancements

- [ ] Database integration (PostgreSQL/MySQL)
- [ ] User authentication and authorization
- [ ] Task categories and tags
- [ ] Task search and filtering
- [ ] Task priority levels
- [ ] Due dates and reminders
- [ ] User preferences and settings
- [ ] Mobile responsive optimization
- [ ] Dark mode support


## Authors

- **Johan192004** - Initial work and project development

