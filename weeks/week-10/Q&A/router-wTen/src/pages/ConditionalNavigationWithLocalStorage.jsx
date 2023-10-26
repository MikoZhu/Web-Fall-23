import Logos from "../components/Logos";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ConditionalNavigationWithLocalStorage = () => {
  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  // Define an array of conditions to check in localStorage
  const conditionsToCheck = ["hello", "pizza", "apple"];

  // Define a state variable to store the retrieved value
  const [storedValue, setStoredValue] = useState("");

  useEffect(() => {
    // Check if the condition is met in localStorage
    const storedValue = localStorage.getItem("user_name"); // Checking for userName stored in localStorage

    // Set the retrieved value in state for displaying in the return section
    setStoredValue(storedValue);
    console.log(storedValue);

    // Add a timer to wait for 3 seconds before further processing
    const timer = setTimeout(() => {
      // Check if the storedValue exists in the conditionsToCheck array
      if (conditionsToCheck.includes(storedValue)) {
        navigate("/"); // Replace '/' with the route to the HomePage
      } else {
        alert(
          `Stored value : ${storedValue}, so we are not going to redirect the user :)`
        );
      }
    }, 2000); // Delay of 2 seconds (changed from 3 seconds)

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate, conditionsToCheck]);

  return (
    <>
      <Logos />
      <h1>Conditional Navigation Example with localStorage</h1>
      <div>
        <p>
          Checking for specific values in localStorage after a 3-second delay
          and displaying the stored value:
        </p>
        <p>Stored Value: {storedValue}</p>
      </div>
    </>
  );
};

// Explanation;
//
// 1.  Initialization:
//     -   Import necessary modules (`Logos`, `useEffect`, `useState`, `useNavigate`).
//     -   Initialize a state variable `storedValue` to hold a value retrieved from `localStorage`.
//     -   Define an array `conditionsToCheck` with conditions to be checked against the `storedValue`.
//
// 2.  `useEffect` Hook:
//     -   Retrieve a value named "user_name" from `localStorage` and store it in `storedValue`.
//     -   Set `storedValue` in the component's state and log it to the console.
//     -   Create a 2-second timer to delay further processing.
//     -   Inside the timer:
//         -   Check if `storedValue` matches any condition in `conditionsToCheck`.
//         -   If there's a match, navigate to the HomePage.
//         -   If not, display `storedValue` and show an alert message that no redirection will occur.
//     -   Clean up the timer when the component unmounts.
//
// 3.  Return Section:
//     -   Render the `Logos` component, a heading, and a paragraph explaining the component's purpose.
//     -   Display the `storedValue` for user visibility.

// In summary, this component checks a value in `localStorage` and, after a 2-second delay, navigates to the HomePage if the value matches predefined conditions. It also displays the value and provides an alert message if no redirection occurs.
