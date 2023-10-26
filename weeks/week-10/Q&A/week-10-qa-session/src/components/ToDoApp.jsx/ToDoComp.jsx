// Context
// In a Todo App, you want to manage a list of tasks (todos). You also want to log state changes, ensure immutability with Immer, and use useShallow, get, and subscribe for various purposes.
import { useEffect } from "react";
import { useStore } from "../../stores/useStore";

export const ToDoComp = () => {
  // Use the Zustand store within ToDoComp
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);
  const removeTodo = useStore((state) => state.removeTodo);

  useEffect(() => {
    // Example: Add a new todo when the component mounts
    addTodo("Learn Zustand in ToDoComp");
  }, [addTodo]);

  return (
    <div>
      <h2>ToDoComp</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
