export const QuestionFour = ({ title, number }) => {
  const content = {
    context:
      "When using SVG files in Vite and wanting to apply hover styles, consider using CSS classes from Tailwind CSS and applying them to SVG elements for dynamic styling.",
    bulletpoints: [
      {
        id: 1,
        title: "SVG and Tailwind CSS",
        point:
          "Apply Tailwind CSS classes to SVG elements to easily add hover styles, animations, and other dynamic effects.",
      },
      {
        id: 2,
        title: "Static vs. Dynamic SVGs",
        point:
          "Understand the difference between static SVGs (unchangeable) and dynamic SVGs (modifiable with CSS) for proper usage.",
      },
      {
        id: 3,
        title: "Event Handling",
        point:
          "Leverage JavaScript event handlers to add interactivity to SVG elements when clicked or hovered.",
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
