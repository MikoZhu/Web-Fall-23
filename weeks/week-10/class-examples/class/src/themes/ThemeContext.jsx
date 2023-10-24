// Import necessary functions and objects from the React library
import { createContext, useState, useContext, useEffect } from "react";

// 3 step process to create a store using this approach so everything lives within one single file (much more organized)
// 1. Create a new context and store it inside variable
// 2. Define an`export const tipe of variable that will recieve props` - this is where we will be adding states, data & logic - this part of the file is what we will call a CONTEXT
// 3. export the context using something we will call a custom hook that will provide access to the context on all of our app

// STEP 1
// Create a new context called ThemeContext
const ThemeContext = createContext();

// STEP 2
// Define a component called ThemeProvider
export const ThemeProvider = ({ children }) => {
  // Example 1 - Toggle THEME using classes
  // Declare a state variable 'theme' and a function to update it 'setTheme'
  const [theme, setTheme] = useState("light");
  // Function to toggle the theme and apply classes
  const toggleThemeClass = () => {
    // Check if the current theme is 'light'
    if (theme === "light") {
      // If it's 'light', switch to 'dark' theme
      setTheme("dark");
    } else {
      // If it's 'dark', switch to 'light' theme
      setTheme("light");
    }
  };
  const alertIsaac = () => {
    alert("Diego sucks at remembering names... ");
  };
  // Use an effect to apply the initial theme class when the component mounts
  useEffect(() => {
    // Check the current theme and apply corresponding classes
    if (theme === "dark") {
      document.body.classList.add("dark-theme"); // Add the 'dark-theme' class
      document.body.classList.remove("light-theme"); // Remove the 'light-theme' class
    } else {
      document.body.classList.remove("dark-theme"); // Remove the 'remove-theme' class
      document.body.classList.add("light-theme"); // Add the 'light-theme' class
    }
  }, [theme]);

  // declare state variable - reactive var
  const [posts, setPosts] = useState([]);

  // Use an effect to fetch data from the API when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleThemeClass, alertIsaac, posts }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// STEP 3
// Define a custom hoook for accessing the theme context
export const useTheme = () => useContext(ThemeContext);
