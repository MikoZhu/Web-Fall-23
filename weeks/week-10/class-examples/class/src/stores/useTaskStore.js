// Import the 'create' function from Zustand to create a store
import { create } from "zustand";

// Define and create the 'useTaskStore' store using Zustand's 'create' function
export const useTaskStore = create((set) => ({
  // Initialize the 'tasks' state as an empty array
  tasks: [],

  // Define the 'addTask' function to add a new task to the 'tasks' array
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task], // Add the new task to the existing tasks
    })),

  // Define the 'removeTask' function that takes a 'taskIndex' parameter
  removeTask: (taskIndex) => {
    // Use a confirm dialog to ask for confirmation before deleting the task
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    // Check if the user clicked "Cancel" in the confirmation dialog
    if (!shouldDelete) {
      // If the user canceled, return from the function without deleting
      return;
    }

    // Call the 'set' function to update the 'tasks' state
    set((state) => {
      // Create a copy of the 'tasks' array from the current state
      const updatedTasks = [...state.tasks];
      // Remove the task at the specified 'taskIndex' from 'updatedTasks'
      updatedTasks.splice(taskIndex, 1);
      // Return an object with the updated 'tasks' array to update the state
      return { tasks: updatedTasks };
    });
  },

  // ---------
  // ---------
  // ---------
  // EXAMPLE 2 - POSTS
  // USING - https://jsonplaceholder.typicode.com/posts
  // Initialize the 'posts' state as an empty array
  postsZustand: [],
  // Define the 'fetchPosts' async function
  fetchPosts: async () => {
    try {
      // Send a GET request to the specified API URL and await the response
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      // Check if the response status is not OK (e.g., 404 or 500 error)
      if (!response.ok) {
        // If not OK, throw an error with a custom message
        throw new Error("Failed to fetch data");
      }

      // Parse the response body as JSON and await the result
      const data = await response.json();

      // Call the 'set' function to update the 'posts' state with the fetched data
      set({ postsZustand: data });
    } catch (error) {
      // Handle any errors that occurred during the fetch process
      console.error("Error fetching data: ", error);
    }
  },
}));
