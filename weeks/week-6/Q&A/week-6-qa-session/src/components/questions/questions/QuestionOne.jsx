import { useState } from "react";
export const QuestionOne = ({ title, number, sendEmailToParent }) => {
  const content = {
    context:
      "Regex, short for Regular Expression, is a sequence of characters that defines a search pattern. In the context of form validation, it's used to ensure that the input data matches a specific format or meets certain criteria.",
    bulletpoints: [
      {
        id: 1,
        title: "Why",
        point:
          "Using Regex for validation ensures that the data users provide is in the correct format. For instance, if you're asking for an email address in your survey, you'd want to ensure that the input looks like a valid email. This helps in maintaining data integrity and can prevent potential errors or issues down the line.",
      },
      {
        id: 2,
        title: "How?",
        point:
          "Let's say one of the questions in your survey is to get the user's email address. Here's how you can use Regex to validate the email input:",
      },
    ],
  };
  // Regex Logic
  // State to hold the current value of the email input
  const [email, setEmail] = useState("");

  // State to hold the validation message (either error or success)
  const [message, setMessage] = useState("");

  // State to hold the color of the validation message (red for error, green for success)
  const [messageColor, setMessageColor] = useState("red");

  // Function to update the email state whenever the user types in the input field
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to validate the email using a Regex pattern when the user moves away from the input field
  const validateEmail = () => {
    // Basic Regex pattern for email validation
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // If the email doesn't match the pattern, set an error message and color
    if (!regex.test(email)) {
      setMessage("Please enter a valid email address.");
      setMessageColor("red");
    }
    // If the email matches the pattern, set a success message and color
    else {
      setMessage("Email accepted!");
      setMessageColor("green");
    }
  };

  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
        </summary>
        <>
          <p>{content.context}</p>
          <>
            {content.bulletpoints.map((bulletPoint, index, array) => {
              console.log(array); // This will log the entire array for each iteration
              // NEVER USE THE DAMN IndEX IN YOUR KEY PROP, BIG NO NO!
              // WIll get slapped in the hands!
              // ALWAYS USE A UN UnIQUE IDENTIFIER
              return (
                <ul key={bulletPoint.id}>
                  <h4>
                    <strong>{index} - </strong>
                    {bulletPoint.title}
                  </h4>
                  <li>{bulletPoint.point}</li>
                </ul>
              );
            })}
          </>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
            />
            <p style={{ color: messageColor }}>{message}</p>
          </div>
        </>
      </details>
    </div>
  );
};
