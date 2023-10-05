export const QuestionTwo = ({ title, number }) => {
  const content = {
    context:
      "In the PostMessage.jsx file, we observe two distinct locations where message length is being validated: within the useEffect hook and inside the handleFormSubmit function. This might initially seem like an inconsistent approach, but there's a rationale behind it.",
    bulletpoints: [
      {
        id: 1,
        title: "Validation in useEffect:",
        point:
          "What: This hook checks if the message is too long. Why: It provides real-time feedback to the user as they type, enhancing user experience by immediately informing them when their message exceeds the allowable character limit. How: By setting an error message in the state, which can be displayed directly on the UI, users are instantly made aware of the issue.",
      },
      {
        id: 2,
        title: "Validation in handleFormSubmit:",
        point:
          "What: This function checks if the message is too short upon form submission. Why: It prevents the API call from being made if the message doesn’t meet the minimum length requirement, thereby reducing unnecessary HTTP requests and server load. How: By checking the message length and conditionally making the API call, we ensure that only valid data is sent to the server. ",
      },
      {
        id: 3,
        title: "Conclusion",
        point:
          "Consistency in User Experience: Validating the message length in real-time (for being too long) and upon submission (for being too short) ensures a consistent and user-friendly experience. ",
      },
      {
        id: 4,
        title: "Conclusion",
        point:
          "Efficient Network Usage: By preventing API calls for messages that are too short, we optimize network usage and server resources.",
      },
      {
        id: 5,
        title: "Conclusion",
        point:
          "Instant User Feedback: Immediate feedback for overly long messages helps users to comply with requirements as they type, making the interaction smooth and intuitive.",
      },
    ],
  };

  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
          <a
            href="https://github.com/Technigo/Web-Fall-23/blob/main/weeks/week-7/class-examples/week-seven-class/src/components/Twitter/components/PostMessage.jsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to page
          </a>
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
        </>
      </details>
    </div>
  );
};
