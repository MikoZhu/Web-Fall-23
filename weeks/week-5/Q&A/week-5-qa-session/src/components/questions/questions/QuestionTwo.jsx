export const QuestionTwo = ({ title, number }) => {
  const content = {
    context: `When starting with React, running npm install is crucial as it installs the necessary packages listed in your package.json file that your project needs to run correctly.

      Then, npm run dev is typically used to start your development server, allowing you to see your changes in real-time as you develop.
      `,
    bulletpoints: [
      {
        id: 1,
        title: "In short - npm install",
        point: `- npm install: Installs necessary packages. - only once to install all needed packages to start the  dev server and start working. Remember as well that this command will generate your node_modules folder + package-lock.json file.
           
          `,
      },
      {
        id: 2,
        title: "In short - npm run dev",
        point:
          "- npm run dev: Starts the development server. - this you do to start a local environment where you can test your site/app.",
      },
      {
        id: 3,
        title: "In short - turning off dev server",
        point:
          "In the integrated terminal of your vscode where you ran the command 'npm run dev' go ahead and click inside the actual terminal ui and use your keyboard commmands 'ctrl + c'  so you press control plus the letter c together and it turns off the terminal",
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
                <>
                  <h4>{bulletPoint.title}</h4>
                  <li>{bulletPoint.point}</li>
                </>
              </ul>
            ))}
          </>
        </>
      </details>
    </div>
  );
};
