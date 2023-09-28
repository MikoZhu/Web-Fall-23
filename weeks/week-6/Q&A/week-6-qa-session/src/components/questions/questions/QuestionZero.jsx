import { useState } from "react";
export const QuestionZero = ({
  title,
  number,
  sendDataToParent,
  sendInputToParent,
}) => {
  const content = {
    context:
      "In React, the primary concept of sharing data through props is designed to flow from parent-to-child components. However, there are situations where you might want to pass data from a child component up to its parent. ",
    bulletpoints: [
      {
        id: 1,
        title: "Why",
        point:
          "React's design philosophy is that props are passed from parent to child, ensuring a predictable flow of data throughout your application. This makes it easier to understand how data changes and where it originates. However, there are scenarios where a child component might need to inform the parent of some event or change (like a button click or a form submission). In such cases, the child needs a way to 'communicate' this back to the parent.",
      },
      {
        id: 2,
        title: "How?",
        point: "Lets take a look below:",
      },
    ],
  };

  // Using a click  or function :)
  const onClick = () => {
    sendDataToParent("Hello from the child component");
  };

  // EXPLANATION:
  //   The ParentComponent has a state called childData and a function handleChildData that updates this state.
  // The ChildComponent receives the handleChildData function as a prop named sendDataToParent.
  // When the button in ChildComponent is clicked, it calls the sendDataToParent function, passing the message "Hello from Child!".
  // This, in turn, updates the childData state in the ParentComponent.

  // -------
  // -------
  // -------
  // -------

  // Using an input
  const [inputValue, setInputValue] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);

    // Clear the previous timeout if it exists
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set a new timeout
    setTypingTimeout(
      setTimeout(() => {
        sendInputToParent(event.target.value);
      }, 1000)
    ); // 1 second delay after user stops typing
  };

  // EXPLANATION:
  //   The ChildComponent contains an input field. The data is sent to the parent component only after the user has stopped typing for 1 second. If the user resumes typing within that 1-second window, the timer is reset, ensuring the data is sent only after a full 1-second pause in typing.
  // The ParentComponent receives this value in its handleChildInput function, updates its own state childInputData, and displays an alert with the received input data.

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
          <button onClick={onClick}>CLick to send data to parent</button>
          <br />
          <br />
          <div>
            <label for="inputName">what is your name?</label>
            <input
              name="inputName"
              id="inputName"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type a full name..."
            />
          </div>
        </>
      </details>
    </div>
  );
};
