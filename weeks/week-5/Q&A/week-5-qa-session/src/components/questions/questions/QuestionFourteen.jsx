export const QuestionFourteen = ({ title, number }) => {
  const content = {
    context: "let's do it together!",
    bulletpoints: [
      {
        id: 1,
        title: "If you think about it!",
        point: ` <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es" target="_blank" rel="noopener noreferrer">Go Here</a>`,
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
