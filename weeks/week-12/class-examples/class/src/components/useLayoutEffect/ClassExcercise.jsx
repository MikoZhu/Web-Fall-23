import { useState, useLayoutEffect } from "react";

export const ClassExcercise = () => {
  // Using useState to manage the theme state, initially set to "light"
  const [theme, setTheme] = useState("light");

  // Using useLayoutEffect to apply the theme class to the body element before paint
  useLayoutEffect(() => {
    // Setting the className of the body element to the current theme
    document.body.className = theme;
  }, [theme]); // Dependency array includes theme, so effect runs on theme change

  // Defining a function to toggle the theme between "light" and "dark"
  const toggleTheme = () => {
    // Using a function within setTheme to ensure we're toggling based on the previous state
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Poem text for the light theme
  const lightPoem = `
   Light  poem here....
  `;

  // Poem text for the dark theme
  const darkPoem = `
    Dark poem here...
  `;
  return (
    <div className="bordered">
      {" "}
      {/* Displaying a heading */}
      <h1>Theme Exercise - useLayoutEffect</h1>
      {/* Displaying the current theme with conditional styling */}
      <p>
        The current theme is{" "}
        <span style={{ color: theme === "dark" ? "red" : "blue" }}>
          {theme}
        </span>
      </p>
      {/* Button to toggle the theme, which calls toggleTheme onClick */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Conditionally rendering the poem based on the current theme */}
      <p>{theme === "light" ? lightPoem : darkPoem}</p>
    </div>
  );
};
