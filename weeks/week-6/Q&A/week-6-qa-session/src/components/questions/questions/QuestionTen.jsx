// import jsonData from './data.json'; // Example of importing a json object into the file, but it does not exist
export const QuestionTen = ({ title, number }) => {
  const content = {
    context:
      "After Looking at the image. In React, the <> and </> syntax is shorthand for a React Fragment. It allows you to group multiple elements without adding an extra node to the DOM, meaning it doesn't create an additional div or any other element in the rendered output.",
    bulletpoints: [
      {
        id: 1,
        title: "Why not this version? <React.Fragment>",
        point:
          "The explicit <React.Fragment> syntax is often unnecessary in modern development due to the introduction of the shorthand <> and </> syntax, which serves the same purpose but is more concise.",
      },
      {
        id: 2,
        title: "Only downside",
        point: `One downside of using the shorthand fragment syntax <> and </> in React is that you can't assign props like id, key, className, or event listeners to it, as it doesn’t render an actual DOM element.`,
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
          {content.bulletpoints.map((bulletPoint) => (
            <ul key={bulletPoint.id}>
              <>
                <h4>{bulletPoint.title}</h4>
                <li>{bulletPoint.point}</li>
              </>
            </ul>
          ))}
        </>
      </details>
    </div>
  );
};
