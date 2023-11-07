// Importing necessary hooks from React
import { useState, useLayoutEffect } from "react";
import { RefForm } from "./components/useRef/RefForm";
import { RefFormTwo } from "./components/useRef/RefFormTwo";
import { StateForm } from "./components/useRef/StateForm";

// Defining and exporting the App component
export const App = () => {
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

  // Defining a string that holds the light theme poem
  const lightPoem = `
    In realms where light does softly tread,
    A gentle glow where we are led.
    Sunbeams dance with joy so free,
    In a world of warmth, we find our glee.
    Fields of gold under the azure sky,
    In the light, our spirits ever high.
    A canvas painted in hues so bright,
    We find our peace in this splendid light.
  `;

  // Defining a string that holds the dark theme poem
  const darkPoem = `
    In the quietude of the shadow’s grace,
    Mysteries cloak the silent space.
    Moonlight whispers to the tranquil sea,
    In the dark, our souls dare to be.
    Stars twinkle in the velvet night,
    Guiding us with their gentle light.
    A universe veiled in enigmatic art,
    We explore the depths of our own heart.
  `;

  // Returning JSX to render the component UI
  return (
    <div>
      {/* Displaying a heading */}
      <h1>Theme Exercise</h1>
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
      {/* Use State Form - OLD */}
      <StateForm />
      <RefForm />
      <RefFormTwo />
    </div>
  );
};
