export const QuestionSeven = ({ title, number }) => {
  const content = {
    context:
      "When you run a command like npm init vite@latest my-react-project --template react, my-react-project is just the name given to the new project folder that Vite creates. It's a placeholder name, and you can replace it with any name you prefer, like my-music-project, to better represent your project's content or purpose.",
    bulletpoints: [
      {
        id: 1,
        title: "For example, if your project is about music, you might run:",
        point: `npm init vite@latest my-music-project`,
      },
      {
        id: 2,
        title:
          "This will create a new project folder named my-music-project with a React template configured by Vite.",
        point: "cool right?",
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
