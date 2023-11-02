import { useState } from "react";

export const QuestionSeven = ({ title, number }) => {
  const content = {
    context:
      "When you have dynamically generated content, like course cards, and need to translate them using internationalization (i18n), you may encounter challenges when the content is not directly present in translation files. Explore strategies to handle such scenarios effectively.",
    bulletpoints: [
      {
        id: 1,
        title: "Dynamic Content Mapping",
        point: "Let's take a look at this question below",
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
            {content.bulletpoints.map((bulletPoint) => {
              return (
                <ul key={bulletPoint.id}>
                  <h4>{bulletPoint.title}</h4>
                  <li>{bulletPoint.point}</li>
                </ul>
              );
            })}
          </>
          <a
            href="https://stackoverflowteams.com/c/technigo/questions/5271/5272#comment5355_5272"
            target="_blank"
            rel="noopener noreferrer"
          >
            Klaudia exat same question :)
          </a>
        </>
      </details>
    </div>
  );
};
