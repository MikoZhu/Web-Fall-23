import { useState, useEffect } from "react";
export const QuestionOne = ({ title, number }) => {
  const content = {
    context:
      "When working with CSS custom properties (CSS variables) in projects with various styling elements like colors and fonts, it's important to follow naming conventions that promote clarity and maintainability.",
    bulletpoints: [
      {
        id: 1,
        title: "Naming CSS Custom Properties",
        point:
          "Choose descriptive names that convey the purpose of the property, such as '--primary-color' for a primary color variable.",
      },
      {
        id: 2,
        title: "Consistency in Naming",
        point:
          "Maintain consistency in naming conventions across your project to make it easier for developers to understand and use the variables.",
      },
      {
        id: 3,
        title: "Consideration for Fonts",
        point:
          "Apply the same naming principles to font-related variables to ensure a unified approach to styling.",
      },
    ],
  };

  // EXAMPLE OF POST REQUEST
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
            <a
              href="https://dev.to/proticm/css-variables-cheat-sheet-32id"
              target="_blank"
              rel="noopener noreferrer"
            >
              Variable CheetSheet
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </>
        </>
      </details>
    </div>
  );
};
