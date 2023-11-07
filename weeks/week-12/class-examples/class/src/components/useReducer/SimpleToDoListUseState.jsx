import { useState } from "react";

export const SimpleToDoListUseState = () => {
  // Instead of a reducer, we simply use useState to hold our todos array.
  const [todos, setTodos] = useState([]);

  // Function to add a todo item.
  // We update the state by creating a new array with all current todos, plus the new one.
  const addTodo = (text) => {
    const newTodo = { text, done: false };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle the 'done' status of a todo item.
  // We create a new array with the toggled item 'done' status.
  const toggleTodo = (indexToToggle) => {
    const updatedTodos = todos.map((todo, index) =>
      index === indexToToggle ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <div className="bordered">
      <div className="inner">
        <h2>Todo List - useState</h2>
        <button onClick={() => addTodo(prompt("What do you need to do?"))}>
          Add Todo
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              onClick={() => toggleTodo(index)}
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
