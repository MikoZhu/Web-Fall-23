import { useState } from "react";
export const QuestionFour = ({ title, number }) => {
  const content = {
    context:
      "You want to create a React component that displays a question with multiple checkbox options. One of these options is 'Other', which, when selected, provides a text input for the user to type in a custom answer.",
    bulletpoints: [
      {
        id: 1,
        title: "Why?",
        point:
          "This approach allows users to select from predefined options or specify their own answer, offering flexibility and ensuring that all potential responses can be captured.",
      },
      {
        id: 2,
        title: "How?",
        point:
          "You can achieve this by using the useState hook to manage the state of the checkboxes and the custom input. When the 'Other' checkbox is selected, you can conditionally render the text input.",
      },
      {
        id: 3,
        title: "Component Breakdown",
        point:
          "In this component, whenever a checkbox is selected or deselected, the handleCheckboxChange function updates the selectedOptions state. If the 'Other' option is selected, a text input appears, allowing the user to type in their custom answer. The value of this input is managed by the otherValue state and the handleOtherInputChange function.",
      },
    ],
  };

  // Display other quesiton logic from select

  // State to track which checkbox options are selected by the user
  const [selectedOptions, setSelectedOptions] = useState([]);
  // State to store the custom input value when "Other" checkbox is selected
  const [otherValue, setOtherValue] = useState("");

  // Handler function for changes in checkbox selections
  const handleCheckboxChange = (e) => {
    // Destructure the value and checked status from the event target (checkbox input)
    const { value, checked } = e.target;

    // If the checkbox is checked, add its value to the selectedOptions state
    if (checked) {
      setSelectedOptions((prev) => [...prev, value]);
    } else {
      // If unchecked, remove its value from the selectedOptions state
      setSelectedOptions((prev) => prev.filter((option) => option !== value));
    }
  };

  // Handler function for changes in the "Other" input field
  const handleOtherInputChange = (e) => {
    // Update the otherValue state with the new input value
    setOtherValue(e.target.value);
  };

  // Handler function for the submit action
  const handleSubmit = () => {
    // Check if no options are selected and the "Other" input is empty
    if (
      selectedOptions.length === 0 ||
      (selectedOptions.includes("Other") && otherValue.trim() === "")
    ) {
      alert('Please make a selection or provide input for "Other" option.');
      return; // Exit the function early
    }
    // Start constructing the alert message
    let message = "You selected: ";
    // Add all selected options to the message
    message += selectedOptions.join(", ");
    // If "Other" was selected, add the custom input value to the message
    if (selectedOptions.includes("Other")) {
      message += ` with custom input: ${otherValue}`;
    }
    // Display the constructed message in an alert
    alert(message);

    // Cleanup logic: Reset the states to their initial values
    setSelectedOptions([]);
    setOtherValue("");
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
              return (
                <ul key={bulletPoint.id}>
                  <h4>{bulletPoint.title}</h4>
                  <li>{bulletPoint.point}</li>
                </ul>
              );
            })}
          </>
        </>
        <div>
          <label>
            <input
              type="checkbox"
              value="Option1"
              onChange={handleCheckboxChange}
            />
            Option 1
          </label>
          <label>
            <input
              type="checkbox"
              value="Option2"
              onChange={handleCheckboxChange}
            />
            Option 2
          </label>
          <label>
            <input
              type="checkbox"
              value="Other"
              onChange={handleCheckboxChange}
            />
            Other
          </label>
          {selectedOptions.includes("Other") && (
            <input
              type="text"
              placeholder="Please specify"
              value={otherValue}
              onChange={handleOtherInputChange}
            />
          )}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </details>
    </div>
  );
};
