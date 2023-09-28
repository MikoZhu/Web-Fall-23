export const QuestionSixteen = ({ title, number }) => {
  const content = {
    context:
      "In React, it's common and recommended to have one CSS file per component to keep styles modular and maintainable, instead of having one large CSS file ",
    bulletpoints: [
      {
        id: 1,
        title: "This approach, known as CSS Modules",
        point:
          "It helps in managing styles in larger applications by ensuring that styles are scoped to their respective components, avoiding unintended side effects in styling across different components.",
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
