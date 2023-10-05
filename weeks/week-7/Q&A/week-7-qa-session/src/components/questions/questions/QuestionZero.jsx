export const QuestionZero = ({ title, number }) => {
  const content = {
    context:
      "This question relates to the understanding and utilization of Vite in React development, particularly when working with an existing, pre-configured project repository like 'Happy Thoughts'",
    bulletpoints: [
      {
        id: 1,
        title: "What is Vite?",
        point:
          "Vite is a build tool and development server created by Evan You, the creator of Vue.js. It provides a faster and more efficient development",
      },
      {
        id: 2,
        title: "Working with a technigo boiler plate or project repo?",
        point: "Let's see how to set up a project through our Techhnigo Repos",
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
