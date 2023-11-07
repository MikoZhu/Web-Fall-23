import { useReducer } from "react";

// To put it simply, the useReducer hook is a way to manage complex state logic in React components. It is similar to useState but gives you more precise control over how state is updated.

export const SimpleTodoList = () => {
  // The reducer function that decides how the state should change based on the action it receives.
  // It takes the current state and an action, and returns the new state.
  const todoReducer = (state, action) => {
    // The action object will have a 'type' field that tells us what kind of state update we want to do.
    if (action.type === "ADD") {
      // When the action type is 'ADD', we create a new todo item and add it to our list of todos.
      // The new item is an object with 'text' from the action and 'done' set to false initially.
      return [...state, { text: action.text, done: false }];
    } else if (action.type === "TOGGLE") {
      // When the action type is 'TOGGLE', we change the 'done' status of the todo item that was clicked.
      // We use map to create a new array where the item's 'done' value is toggled for the one we're interested in.
      return state.map((item, index) =>
        index === action.index ? { ...item, done: !item.done } : item
      );
    } else {
      // If the action type is not recognized, we return the current state without making any changes.
      return state;
    }
  };

  // The useReducer hook is used here to manage our todos state. We pass our reducer function and the initial state (an empty array).
  // It returns the current state ('todos') and a 'dispatch' function that we can call to send actions to our reducer.
  const [todos, dispatch] = useReducer(todoReducer, []);

  // This function is called when we want to add a new todo item.
  // It dispatches an 'ADD' action along with the text for the new todo.
  const addTodo = (text) => {
    dispatch({ type: "ADD", text });
  };

  // This function is called when we want to toggle the done status of a todo item.
  // It dispatches a 'TOGGLE' action along with the index of the item we want to toggle.
  const toggleTodo = (index) => {
    dispatch({ type: "TOGGLE", index });
  };

  // The UI of the Todo List component
  return (
    <div className="bordered">
      <div className="inner">
        <h2>Todo List</h2>
        {/* This button calls 'addTodo' with text from a prompt when clicked. */}
        <button onClick={() => addTodo(prompt("What do you need to do?"))}>
          Add Todo
        </button>
        <ul>
          {/* We map over the 'todos' state array to create a list item for each todo. */}
          {todos.map((todo, index) => (
            <li
              key={index}
              // When a todo item is clicked, we call 'toggleTodo' with the index of that item.
              onClick={() => toggleTodo(index)}
              // The style changes based on whether the todo item is done or not.
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
