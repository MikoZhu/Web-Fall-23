export const QuestionSix = ({ title, number }) => {
  const content = {
    context:
      "When dealing with text in internationalization (i18n) translation files, consider how to style specific text elements and whether they should be defined within a JavaScript const or kept in a JSON file.",
    bulletpoints: [
      {
        id: 1,
        title: "Styling in Constants",
        point:
          "You can define styled text elements in JavaScript constants and then use them in conjunction with translation functions.",
      },
      {
        id: 2,
        title: "Separate JSON for Text",
        point:
          "For clean separation of content and styles, keep the text content in the JSON translation file and apply styles in your components.",
      },
      {
        id: 3,
        title: "Flexibility vs. Structure",
        point:
          "Choose the approach that balances flexibility and structural organization based on your project's requirements.",
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
            {content.bulletpoints.map((bulletPoint) => (
              <ul key={bulletPoint.id}>
                <h4>{bulletPoint.title}</h4>
                <li>{bulletPoint.point}</li>
              </ul>
            ))}
            <a
              href="https://stackoverflowteams.com/c/technigo/questions/5265/5266#comment5352_5266"
              target="_blank"
              rel="noopener noreferrer"
            >
              SO QUestion for multiLine on strings living inside the comp
            </a>
          </>
        </>
      </details>
    </div>
  );
};
