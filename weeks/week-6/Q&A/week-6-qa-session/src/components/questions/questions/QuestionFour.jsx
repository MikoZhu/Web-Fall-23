export const QuestionFour = ({ title, number }) => {
  const content = {
    context:
      "In React, when you run npm init vite@latest my-react-project --template react, you are creating a new project named my-react-project using Vite as the build tool, with a React template. Also, you are giving the project a name which is 'my-react-project'",
    bulletpoints: [
      {
        id: 1,
        title: "Let's keep things simple",
        point:
          "use the command: npm init vite@latest and follow the install instructions, you can see a gif of this on your vite mini-lesson on your class toolbox",
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
