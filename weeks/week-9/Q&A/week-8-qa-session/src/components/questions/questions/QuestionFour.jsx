export const QuestionFour = ({ title, number }) => {
  //  The line below, line 3 to be exat, demonstrates how can you import env variables using the vite default config
  const apiEnv = import.meta.env.VITE_OPENDB_KEY;
  console.log(apiEnv);
  const content = {
    context:
      "In modern web development, especially with frameworks like React, it's common to have configuration settings that vary between different environments (e.g., development, staging, production). To manage these settings without hardcoding them into the application, developers use environment variables. The `.env` file is a standard and convenient way to define and store these variables. The .env file serves as a centralized location for environment-specific configurations.",
    bulletpoints: [
      {
        id: 1,
        title: "What is an .env File?",
        point:
          "The `.env` file is a plain text file used to define environment variables. Each line in the file represents a key-value pair, representing the variable name and its value.",
      },
      {
        id: 2,
        title: "Why Use an .env File?",
        point:
          "Security: Sensitive information, like API keys or database credentials, should not be hard-coded in the application. By using an `.env` file, these details can be kept out of the version control system.",
      },
      {
        id: 3,
        title: "How Does It Work with Modern Tools?",
        point:
          "Many development tools and frameworks automatically recognize and load variables from the `.env` file. For instance, Create React App will load variables prefixed with `REACT_APP_` from the `.env` file.",
      },
      {
        id: 4,
        title: "Understanding the Code Line",
        point:
          "The line `const apiEnv = import.meta.env.VITE_OPENDB_KEY;` is a way to access an environment variable in modern JavaScript without a top-level import. Here, it fetches the value of `VITE_OPENDB_KEY` from the environment variables, which might have been defined in an `.env` file and exposed to the frontend by a tool like Vite.",
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
