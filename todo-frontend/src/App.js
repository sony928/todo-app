import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8080/api/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };

  const addTodo = async () => {
    if (!title.trim()) return;

    await axios.post(API, {
      title,
      description,
      completed: false,
    });

    setTitle("");
    setDescription("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTodos();
  };

  const toggleComplete = async (todo) => {
    await axios.put(`${API}/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });
    fetchTodos();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo App</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {todo.title}
            </span>

            <button onClick={() => toggleComplete(todo)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
