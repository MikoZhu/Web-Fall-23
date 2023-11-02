export const QuestionTwo = ({ title, number }) => {
  const content = {
    context:
      "When using styled-components in React, you can choose between maintaining a single file for styling or having separate files for each component. The decision depends on project preferences and organization.",
    bulletpoints: [
      {
        id: 1,
        title: "Single Styling File",
        point:
          "A single styling file can work well for smaller projects or when styles are relatively simple and can be shared across multiple components.",
      },
      {
        id: 2,
        title: "Separate Files for Components",
        point:
          "Using separate styling files for each component can offer better organization and isolation of styles, especially in larger projects.",
      },
      {
        id: 3,
        title: "Consider Project Size",
        point:
          "Consider the size and complexity of your project when deciding between these two approaches for styled-components.",
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
