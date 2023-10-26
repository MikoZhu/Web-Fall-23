export const QuestionNine = ({ title, number }) => {
  const content = {
    context:
      "Optimistic updates in web development refer to a pattern where the UI is updated as if a certain operation (like a data update request to a server) will succeed, before actually receiving a response from the server. This is done to make the app feel faster and more responsive from the user’s perspective. The question pertains to an error encountered during an attempt to implement optimistic updates, specifically an issue with a 'createdAt' date attribute.",
    bulletpoints: [
      {
        id: 1,
        title: "What is Optimistic Update?",
        point:
          "Optimistic update is a pattern where we update the UI in the hope of a successful server response, to make the app feel snappier and more responsive to the user.",
      },
      {
        id: 2,
        title: "Common Issues with Optimistic Updates",
        point:
          "Issues can arise like getting errors if the server response is not as expected, or handling subsequent user actions that depend on the previous operation.",
      },
      {
        id: 3,
        title: "Error Related to 'createdAt'",
        point:
          "The error related to 'createdAt' might be due to a mismatch in expected data format or a null/undefined value. It’s crucial to inspect how 'createdAt' is being used and expected in the code.",
      },
      {
        id: 4,
        title: "Troubleshooting the Error",
        point:
          "To troubleshoot, check where 'createdAt' is used, ensure date formats are handled correctly, and inspect network requests and responses for unexpected data structures.",
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
          </>
        </>
      </details>
    </div>
  );
};
