import { create } from "zustand";
import { produce } from "immer";

// Define middleware function
const customMiddleware = (config) => (set, get, api) => (args) => {
  // Your middleware logic here
  // For example, you can log state changes
  console.log("Current state:", get());
  api(args); // Call the next middleware or state update
  console.log("Updated state:", get());
};

// Create the Zustand store with middleware and Immer
export const useStore = create(
  (set) => ({
    todos: [],
    addTodo: (text) =>
      set((state) =>
        produce(state, (draft) => {
          draft.todos.push({ text });
        })
      ),
    removeTodo: (index) =>
      set((state) =>
        produce(state, (draft) => {
          draft.todos.splice(index, 1);
        })
      ),
  }),
  {
    middleware: [customMiddleware],
  }
);

// Explanation
// Let's break down the provided code for a Zustand store and explain how it utilizes middleware and Immer:

// Middleware:

// -   In the code, you define a custom middleware function named `customMiddleware`. Middleware in Zustand allows you to intercept and modify state updates before they are applied.
// -   The purpose of this middleware is to log the current state before and after any state update operation. This helps with debugging and understanding how the state changes over time.
// -   `get()` is used to retrieve the current state, and `api(args)` is called to proceed with the state update. This ensures that the middleware is executed before and after each state change.

// Immer:

// -   Immer is a library integrated into Zustand to simplify state updates by allowing you to write code that appears to modify state directly, even though it creates a new draft state and then applies the changes.
// -   Both the `addTodo` and `removeTodo` functions utilize Immer's `produce` function to update the state in an immutable way. It ensures that you're not directly mutating the state, which can lead to unexpected behavior and bugs.
// -   In the `addTodo` function, it adds a new todo to the `todos` array using Immer's `produce`.
// -   In the `removeTodo` function, it removes a todo from the `todos` array at a specified index without mutating the state directly.

// UseShallow, Get, or Subscribe:
// -   `get()` can be used to retrieve the current state if needed in a component or function.
// -   `useShallow` can be used in components where you want to subscribe to state changes but only re-render when there's a shallow change in the state.
// -   `subscribe` can be used to set up subscriptions for state changes and execute specific actions when the state updates.

// In summary, this code sets up a Zustand store with custom middleware and Immer to manage a list of todos. The middleware logs state changes, and Immer ensures immutable state updates. While the code doesn't explicitly demonstrate the usage of `useShallow`, `get`, or `subscribe`, these functions would typically be used in components that interact with this store to access or listen to state changes.
