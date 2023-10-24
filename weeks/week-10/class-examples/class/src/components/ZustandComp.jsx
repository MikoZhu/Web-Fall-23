// Import necessary functions and objects from React
import { useEffect } from "react";
// Import the 'useTaskStore' hook from the Zustand store
import { useTaskStore } from "../stores/useTaskStore";

export const ZustandComp = () => {
  // Destructure and assign variables from the 'useTaskStore' hook
  const { tasks, addTask, removeTask, fetchPosts, postsZustand } =
    useTaskStore();
  // Define a function to handle adding a task
  const handleAddTask = () => {
    // Prompt the user to enter a new task
    const task = prompt("Enter a new task:");
    // If a task is provided (not null or empty), add it to the tasks
    if (task) addTask(task);
  };

  // Use an effect to run code when the component mounts (empty dependency array)
  useEffect(() => {
    // Fetch posts when the component mounts
    fetchPosts();
  }, []); // Empty dependency array ensures this effect runs only once

  // Return JSX for rendering the component
  return (
    <>
      <h2>Tasks</h2>
      {/* Button to add a task */}
      <button onClick={handleAddTask}>Add Task</button>
      <details>
        <summary>Tasks </summary>
        {/* Map and render tasks from the 'tasks' array */}
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </details>
      <hr />
      <h2>Posts</h2>
      <ul>
        {/* Map and render posts from the 'postsZustand' array */}
        {postsZustand.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
