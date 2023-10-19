export const QuestionTwo = ({ title, number }) => {
  const content = {
    context:
      "Deploying a website often involves multiple environments, such as development (localhost) and production (deployed site). Differences between these environments can sometimes lead to unexpected behaviors in the production version, even if everything seems perfect in the development version.",
    bulletpoints: [
      {
        id: 1,
        title: "TIme to debug together",
        point: "Let's look at the project together",
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
        </>
      </details>
    </div>
  );
};
