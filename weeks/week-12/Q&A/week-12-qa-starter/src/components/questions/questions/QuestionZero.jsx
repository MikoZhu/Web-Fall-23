export const QuestionZero = ({ title, number }) => {
  const content = {
    context:
      "In React's ecosystem, managing state is a fundamental aspect that determines how data flows and is maintained within an application. Zustand and useReducer represent two different approaches to state management in React applications.",
    bulletpoints: [
      {
        id: 1,
        title: "Understanding Zustand",
        point:
          "Zustand is a minimalistic state management solution. It allows you to create global state stores outside of your React components. Zustand provides a simple and straightforward API for updating and consuming the state without the need for reducers or contexts.",
      },
      {
        id: 2,
        title: "Understanding useReducer",
        point:
          "useReducer is a React hook that is used for managing state in a component. It works well for complex state logic that involves multiple sub-values or when the next state depends on the previous one. It's more structured compared to useState, as it centralizes state update logic in a reducer function.",
      },
      {
        id: 3,
        title: "Comparing Zustand and useReducer",
        point:
          "While Zustand manages state globally and focuses on simplicity and ease of use, useReducer is component-scoped and encourages a more structured state update mechanism through actions and reducers.",
      },
      {
        id: 4,
        title: "Combining Zustand and useReducer",
        point:
          "Combining Zustand with useReducer isn't common, as they serve similar purposes but on different scopes. However, one could use Zustand for global states like user authentication, and useReducer for local state that requires complex logic, ensuring both readability and maintainability.",
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
            {content.bulletpoints.map((bulletPoint, index, array) => {
              console.log(array); // This will log the entire array for each iteration
              return (
                <ul key={bulletPoint.id}>
                  <h4>{bulletPoint.title}</h4>
                  <li>{bulletPoint.point}</li>
                </ul>
              );
            })}
            <img
              src="https://media.giphy.com/media/FCQvc3IreTNNm/giphy.gif"
              alt="What is love?"
            />
          </>
        </>
      </details>
    </div>
  );
};
