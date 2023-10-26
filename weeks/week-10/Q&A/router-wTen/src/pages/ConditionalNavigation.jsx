import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logos from "../components/Logos";

export const ConditionalNavigation = () => {
  // Define a state variable to hold the string
  const [message, setMessage] = useState("");

  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  // Simulate changing the message after a delay
  useEffect(() => {
    const delay = setTimeout(() => {
      setMessage("hello"); // Change the message to "hello" after a delay
    }, 3000); // Delay of 3 seconds (for demonstration purposes)

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(delay);
  }, []);

  // Check the value of the message using useEffect
  useEffect(() => {
    // If the message equals "hello," navigate back to the HomePage
    if (message === "hello") {
      alert(
        `Message Reactive variable is typeChecked to correctly matched to string ${message}`
      );
      navigate("/"); // Replace '/' with the route to the HomePage
    }
  }, [message, navigate]);
  return (
    <>
      <Logos />
      <h1>Conditional Navigation Example</h1>
      <p>Checking for the message "hello" to navigate back to the HomePage.</p>
    </>
  );
};

// Explanation
// 1. We import necessary modules, including useEffect, useState, and useNavigate from 'react-router-dom'.
// 2. We define a state variable message using useState. Initially, it's an empty string.
// 3. Inside the first useEffect, we simulate changing the message variable to "hello" after a 3-second delay (for demonstration purposes).
// 4. The second useEffect listens for changes in the message variable. When the message becomes "hello," there is an alert that displays a message and it uses the navigate function to navigate back to the HomePage (you should replace '/' with the actual route to your HomePage).
// 5. The component renders a simple message indicating that it's checking for the "hello" message to trigger navigation.

// Summary: With this code, when the message variable becomes "hello," the component will use the useNavigate() hook to navigate the user back to the HomePage.
