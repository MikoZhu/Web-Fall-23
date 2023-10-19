export const QuestionZero = ({ title, number }) => {
  const content = {
    context:
      "This question relates to the challenges and best practices in deploying React projects on Netlify, specifically concerning project structure, environment variables, and configuration.",
    bulletpoints: [
      {
        id: 1,
        title: "Lets create a project together  and deploy to netlify",
        point:
          "This project will be a react project using the react-router-library as well as being a nested folder project, also called a monorepo approach in netlify.",
      },
      {
        id: 2,
        title: "Github Repo",
        point: "https://github.com/dzc1/parent/tree/main",
      },
      {
        id: 3,
        title: "Working Demo",
        point: "https://nestedfolder.netlify.app/",
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
