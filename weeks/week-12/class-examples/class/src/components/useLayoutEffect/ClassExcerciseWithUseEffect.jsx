import { useState, useEffect } from "react";

export const ClassExcerciseWithUseEffect = () => {
  // State to keep track of the current theme, with "light" as the default
  const [theme, setTheme] = useState("light");

  // Using useEffect to apply the theme class to the body element after all DOM mutations
  useEffect(() => {
    // Applying the current theme class to the body element
    document.body.className = theme;
    // This will happen after the browser has performed painting
  }, [theme]); // The effect depends on the theme state, so it runs when theme changes

  // Function to toggle the current theme between "light" and "dark"
  const toggleTheme = () => {
    // setState function form that uses the previous state to determine the new state
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Poem text for the light theme
  const lightPoem = `
    ... // (same poem text as before)
  `;

  // Poem text for the dark theme
  const darkPoem = `
    ... // (same poem text as before)
  `;

  return (
    <div className="bordered">
      <h1>Theme Exercise</h1>
      <p>
        The current theme is{" "}
        <span style={{ color: theme === "dark" ? "red" : "blue" }}>
          {theme}
        </span>
      </p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>{theme === "light" ? lightPoem : darkPoem}</p>
    </div>
  );
};
