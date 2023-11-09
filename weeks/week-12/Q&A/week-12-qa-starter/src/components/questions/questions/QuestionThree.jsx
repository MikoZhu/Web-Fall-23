export const QuestionThree = ({ title, number }) => {
  const content = {
    context:
      "The 'windows Object' in JavaScript provides access to various properties and methods related to the browser window and is used for tasks like handling pop-up windows, timers, and more.",
    bulletpoints: [
      {
        id: 1,
        title: "Common Use Cases",
        point:
          "The 'windows Object' is used for opening new browser windows or tabs, setting timeouts and intervals, and managing browser history.",
      },
      {
        id: 2,
        title: "Accessing Window Properties",
        point:
          "You can access properties like 'window.location' to get the current URL or 'window.innerWidth' to get the viewport width.",
      },
      {
        id: 3,
        title: "Handling Pop-up Windows",
        point:
          "It's commonly used to control and manage pop-up windows or dialogs in web applications.",
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
