import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logos from "../components/Logos";

export const Home = () => {
  const text = {
    heading: "Vite + React + React Router + Minimal CSS",
    subheading: "Home Page",
    intro:
      "Welcome, Technigo students! This boilerplate is designed specifically for you. We understand the importance of a smooth start, especially when diving into libraries like React Router. With this in mind, we've crafted an out-of-the-box solution to help you seamlessly integrate the router library into your projects.",
    cleanup: "If you want to remove all stylings you can do the following:",
    html: ` <ul>
    <li>
      Comment line 5 of this file which pertains to the import of the CSS
      file called <strong>App.css</strong> with the
      <code>import "./App.css";</code>
    </li>
    <li>
      Navigate to the file with the name <strong>main.jsx</strong> and
      comment/remove line 4 which pertains to the import of the CSS file
      called <strong>index.css</strong> with the
      <code>import "./index.css";</code>
    </li>
    <li>
      Remove all logos from this file like the Technigo, React or Vite Logo
      and proceed to remove their imports as well as remove the files
    </li>
    <li>
      After these steps have being performed, we recommend removing these
      files to keep the folder structure minimal and easier to navigate.
    </li>
    <li>
      If you are feeling lazy you use this
      <a href="https://github.com/Technigo/react-router-boiler-plate-no-css" target="_blank" rel="noopener noreferrer">
        minimal starter with no styling
      </a>
    </li>
  </ul>`,
  };

  // --------
  // --------
  // --------
  // --------
  // --------
  // Example 1
  //  In this example we'll use the useNavigate() hook in React Router. We'll create a simple example of a button that, when clicked, navigates to a different route programmatically.
  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  // Define a function to handle the button click event
  const handleButtonClick = () => {
    // Use the navigate function to programmatically navigate to a different route
    navigate("/about"); // Replace '/about' with the route you want to navigate to
  };

  // Explanation
  // 1. We import the useNavigate hook from 'react-router-dom'.
  // 2. Inside the HomePage component, we use the useNavigate() hook to get the navigate function.
  // 3. We define a handleButtonClick function that will be called when the button is clicked.
  // 4. Inside handleButtonClick, we use the navigate function to navigate to the '/about' route when the button is clicked. You can replace '/about' with the route you want to navigate to.
  // 5. Finally, we render a button that, when clicked, calls the handleButtonClick function, triggering the navigation.

  // --------
  // --------
  // --------
  // --------
  // --------
  // Example 2
  // In this example, we'll an input field that asks the user for their name. The entered name will be stored in localStorage, and we'll use the useEffect and useNavigate hooks to check if the user's name matches a specific condition stored in localStorage for conditional navigation.
  // Define a state variable for the user's name
  const [name, setName] = useState("");

  // Handle input change and update the name state
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // Handle form submission and store the name in localStorage
  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user_name", name);
    alert(`Thank you for submitting name: ${name}`);
    setName(""); // Clear the input field by setting the name state to an empty string
  };
  return (
    <>
      <Logos />
      <h1 className="heading">{text.heading}</h1>
      <h2>{text.subheading}</h2>
      <p>{text.intro}</p>
      <p>{text.cleanup}</p>
      {/* Example of using a js property to inject dyanmic html */}
      <div dangerouslySetInnerHTML={{ __html: text.html }} />
      <div className="card">
        <p>Click the button to navigate to the About Page.</p>
        {/* Button that triggers navigation */}
        <button onClick={handleButtonClick}>Go to About</button>
      </div>
      <div className="card">
        <p>Enter your name:</p>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
