export const QuestionFifteen = ({ title, number }) => {
  const content = {
    context:
      "See image and lets talk about eslint Let's change your '.eslintrc.cjs' file. In the context of React, ESLint is a tool that analyzes your code to find and fix problems, and ensure your code follows certain style guidelines, helping you write cleaner and more consistent code. ",
    bulletpoints: [
      {
        id: 1,
        title:
          "Copy and replace the contents of your current .eslintrc.cjs file",
        point: `module.exports = {
            root: true,
            env: { browser: true, es2020: true },
            extends: [
              "eslint:recommended",
              "plugin:react/recommended",
              "plugin:react/jsx-runtime",
              "plugin:react-hooks/recommended",
            ],
            ignorePatterns: ["dist", ".eslintrc.cjs"],
            parserOptions: { ecmaVersion: "latest", sourceType: "module" },
            settings: { react: { version: "18.2" } },
            plugins: ["react-refresh"],
            rules: {
              "react/prop-types": "off",
              "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
              ],
            },
          };
          `,
      },
      {
        id: 2,
        title: "Possible Reasons for Discrepancy",
        point: `Different Configurations, Different Implementations, Different Versions`,
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
