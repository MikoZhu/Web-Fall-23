export const QuestionZero = ({ title, number }) => {
  const content = {
    context:
      "This question relates to handling text translation in projects with significant content and multiple languages.",
    bulletpoints: [
      {
        id: 1,
        title: "1 json file for each language",
        point:
          "I know its a bit tedious but its how it's done :), luckily we have chatGPT notw a days, imagine in 2010. The struggle was real.",
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
            <img
              src="https://media.giphy.com/media/aBOFW2LNUR9uT5lLYr/giphy.gif"
              alt="Description of the GIF"
            />
          </>
        </>
      </details>
    </div>
  );
};
