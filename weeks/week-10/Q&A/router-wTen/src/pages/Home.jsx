import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logos from "../components/Logos";

export const Home = () => {
  const text = {
    heading: "useNavigate vs Link in react router",
    subheading: "Home Page",
    intro: "",
    cleanup: "",
    html: ` <ul>
    <li>
      Start navigating around...
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
