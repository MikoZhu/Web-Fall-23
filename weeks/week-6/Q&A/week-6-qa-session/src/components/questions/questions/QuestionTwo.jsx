import { useState } from "react";

export const QuestionTwo = ({ title, number, question, onAnswerSubmit }) => {
  const content = {
    context: `The warning message you're seeing is related to the <select> element in React. When using the <select> element without the multiple attribute, React expects the value prop to be a single value (scalar), not an array.
      `,
    bulletpoints: [
      {
        id: 1,
        title: "In short - npm install",
        point: `- npm install: Installs necessary packages. - only once to install all needed packages to start the  dev server and start working. Remember as well that this command will generate your node_modules folder + package-lock.json file.
           
          `,
      },
      {
        id: 2,
        title: "Why?",
        point:
          "React enforces this because, without the multiple attribute, a <select> element can only have one selected option at a time. If you provide an array as the value, React gets confused about which option to show as selected, hence the warning.",
      },
      {
        id: 3,
        title: "To fix this, you have two options:",
        point: ` - you intend to allow multiple selections, add the multiple attribute to the <select> element and continue using an array for the value prop.
            ----- If you only want a single selection, ensure that the value prop receives a scalar value (like a string or number) instead of an array.
          `,
      },
    ],
  };

  // Example 1
  const [selectedValue, setSelectedValue] = useState(""); // Initialize with a scalar value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedValue) {
      alert(`You selected: ${selectedValue}`);
    } else {
      alert("Please select an option before submitting.");
    }
  };

  // Example 2 - Using Multiple Value to bypass the error and set to array to accept multiple values
  const [selectedOptions, setSelectedOptions] = useState([]); // Initialize with an empty array for multiple selections

  const handleMultipleSelectionChange = (event) => {
    const chosenOptions = Array.from(event.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedOptions(chosenOptions);
  };

  const handleSubmitMultiple = () => {
    if (selectedOptions.length > 0) {
      alert(`You selected: ${selectedOptions.join(", ")}`);
    } else {
      alert("Please select at least one option before submitting.");
    }
  };

  // Example 3 --- This example is passed above to parent comp
  const [answer, setAnswer] = useState("");

  const handleInputChange = (e) => {
    if (question.type === "checkbox") {
      const option = e.target.value;
      if (e.target.checked) {
        setAnswer((prevAnswer) => [...prevAnswer, option]);
      } else {
        setAnswer((prevAnswer) => prevAnswer.filter((item) => item !== option));
      }
    } else {
      setAnswer(e.target.value);
    }
  };

  const handleSubmitTwo = () => {
    onAnswerSubmit(answer);
    setAnswer(question.type === "checkbox" ? [] : "");
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
            {content.bulletpoints.map((bulletPoint) => (
              <ul key={bulletPoint.id}>
                <>
                  <h4>{bulletPoint.title}</h4>
                  <li>{bulletPoint.point}</li>
                </>
              </ul>
            ))}
          </>
        </>
        {/* ---- */}
        {/* EXAMPLE 1 */}
        {/* ---- */}
        <div>
          <select value={selectedValue} onChange={handleChange}>
            <option value="">--Select an option--</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        {/* ---- */}
        {/* EXAMPLE 2 */}
        {/* ---- */}
        <div>
          <select
            multiple
            value={selectedOptions}
            onChange={handleMultipleSelectionChange}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button onClick={handleSubmitMultiple}>Submit</button>
        </div>
        {/* ---- */}
        {/* EXAMPLE 3 */}
        {/* ---- */}
        <div>
          <h2>{question.text}</h2>
          {/* Conditional rendering: If the question's type is "text", render an input field */}
          {question.type === "text" && (
            <input type="text" value={answer} onChange={handleInputChange} />
          )}
          {/* Conditional rendering: If the question's type is "dropdown", render a dropdown select element */}
          {question.type === "dropdown" && (
            <select value={answer} onChange={handleInputChange}>
              <option value="">Select an option</option>
              {question.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          <button onClick={handleSubmitTwo}>Submit</button>
        </div>
      </details>
    </div>
  );
};
