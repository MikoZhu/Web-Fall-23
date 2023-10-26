import { ToDoComp } from "../../ToDoApp.jsx/ToDoComp";
export const QuestionTwo = ({ title, number }) => {
  const content = {
    context: "This question relates to using Zustand state library in React.",
    bulletpoints: [
      {
        id: 1,
        title: "Middleware in Zustand:",
        point:
          "What: Middleware in Zustand allows you to intercept and modify state updates before they are applied. - Why: It's useful when you need to perform tasks like logging, asynchronous operations, or modifying the state change behavior.",
      },
      {
        id: 2,
        title: "Immer in Zustand",
        point:
          "What: Immer is a library integrated into Zustand that simplifies state updates by allowing you to write code that appears to modify state directly, even though it creates a new draft state and then applies the changes. -- Why: It makes working with immutable state more straightforward and cleaner. ",
      },
      {
        id: 3,
        title: "useShallow, get, and subscribe",
        point:
          "What: These functions in Zustand help you interact with and monitor the state. - Why: They provide different ways to access and manage your state depending on your needs. ",
      },
      {
        id: 4,
        title: "Example",
        point:
          "Let's create a simple Todo App using Zustand and illustrate the concepts of middleware, Immer, useShallow, get, and subscribe.",
      },
    ],
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
            <h5>Why Validate in Different Places?</h5>
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
          <ToDoComp />
        </>
      </details>
    </div>
  );
};
