import React, { useState } from "react";
import TodoList from "./TodoList";
import "./../styles/App.css";

const App = () => {
  // Initial state with sample todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Project", completed: false },
    { id: 3, text: "Practice JavaScript", completed: false }
  ]);

  // Function to mark a todo as completed
  const handleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
};

export default App;
