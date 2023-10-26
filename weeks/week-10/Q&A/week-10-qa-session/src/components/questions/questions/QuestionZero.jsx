export const QuestionZero = ({ title, number }) => {
  const content = {
    context:
      "This question relates to the next week's collaboration project between the UX & Web Dev Class of the Technigo Fall 2023 Bootcamps",
    bulletpoints: [
      {
        id: 1,
        title:
          "Let's review the project together and let's review the groups and talk about how this groups are going to be working",
        point: "Let's jump to Notion",
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
