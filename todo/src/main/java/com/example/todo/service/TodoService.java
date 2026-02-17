package com.example.todo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.todo.model.Todo;
import com.example.todo.repository.TodoRepository;

@Service
public class TodoService {

    private final TodoRepository repository;

    public TodoService(TodoRepository repository) {
        this.repository = repository;
    }

    // Create Todo
    public Todo createTodo(Todo todo) {
        return repository.save(todo);
    }

    // Get All Todos (Optional filter by completed)
    public List<Todo> getAllTodos(Boolean completed) {
        if (completed != null) {
            return repository.findByCompleted(completed);
        }
        return repository.findAll();
    }

    // Update Todo
    public Todo updateTodo(Long id, Todo updatedTodo) {
        Todo todo = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));

        todo.setTitle(updatedTodo.getTitle());
        todo.setDescription(updatedTodo.getDescription());
        todo.setCompleted(updatedTodo.isCompleted());

        return repository.save(todo);
    }

    // Delete Todo
    public void deleteTodo(Long id) {
        repository.deleteById(id);
    }
}
