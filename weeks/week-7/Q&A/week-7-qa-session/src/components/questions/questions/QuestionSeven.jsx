import { useState } from "react";

export const QuestionSeven = ({ title, number }) => {
  const content = {
    context:
      "Understanding variable usage in React involves recognizing when to utilize state for dynamic, UI-affecting values and when to employ const/let for static or non-UI-affecting values. This distinction is pivotal for efficient data management and optimal rendering behavior within your components.",
    bulletpoints: [
      {
        id: 1,
        title: "Using State",
        point:
          "State is utilized for values that, when altered, should cause the component to re-render, reflecting changes on the UI.",
      },
      {
        id: 2,
        title: "Using const/let",
        point:
          "const/let are employed for values that, even when changed, should NOT cause the component to re-render, such as temporary variables within a function.",
      },
    ],
  };

  // Using state to manage the count value, which will cause a re-render when changed
  const [count, setCount] = useState(0);

  // Using const to store a static message, changing this won't cause a re-render
  const staticMessage = "This message won't change.";

  // Function to increment count, demonstrating state change and re-render
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Explanation
  // This component in React shows us two main things: how to use a changing number (or "state") and how to display a fixed message. When you look at the component, you'll see some text and a button. The text shows a number (which starts at 0) and a message that always stays the same. When you click the button, the number goes up by 1 each time, and you can see the new number right away. This changing number is managed using something called "state" because we want to see its new value immediately on the screen. The message that doesn’t change is just stored in a regular variable because we don’t need to update it. So, this component helps us see the difference between a regular variable and "state" in React: one updates what we see on the screen, and the other doesn’t.

  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
        </summary>
        <>
          <p>{content.context}</p>
          <>
            {content.bulletpoints.map((bulletPoint) => {
              return (
                <ul key={bulletPoint.id}>
                  <h4>{bulletPoint.title}</h4>
                  <li>{bulletPoint.point}</li>
                </ul>
              );
            })}
          </>
          {/* Displaying the static message */}
          <p>{staticMessage}</p>
          {/* Displaying the count value from state and a button to change it */}
          <p>Count: {count}</p>
          <button onClick={incrementCount}>Increment Count</button>
        </>
      </details>
    </div>
  );
};
