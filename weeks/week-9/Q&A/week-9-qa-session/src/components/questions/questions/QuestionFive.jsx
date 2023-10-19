import { LoaderTopLevel } from "../../loader/LoaderTopLevel";

export const QuestionFive = ({ title, number }) => {
  const content = {
    context:
      "Absolutely, lets see how can we approach this solution. Lets use the deployed project for referene.",
    bulletpoints: [
      {
        id: 1,
        title: "Why Use a Loading Component?",
        point:
          "User Experience: It provides visual feedback to users, letting them know that the application is processing their request or fetching data.",
      },
      {
        id: 2,
        title: "Should Loading Be Its Own Component?",
        point:
          "Modularity: By creating a separate loading component, you can reuse it across different parts of your application, ensuring consistency and reducing redundancy.",
      },
      {
        id: 3,
        title: "How to Structure with Ifs and Try?",
        point:
          "Control Flow: Using conditional (if) statements and try-catch blocks allows you to handle different states (e.g., loading, success, error) and potential exceptions gracefully.",
      },
      {
        id: 4,
        title: "Importing to app.jsx",
        point:
          "Integration: Once the loading component is created, you can easily import and use it in your main `app.jsx` or any other component where you need to display a loading state.",
      },
    ],
  };

  return (
    <div className="question-outer-container">
      {/* Details HTML element to create an expandable/collapsible section */}
      <details>
        {/* Summary element to hold the clickable title for the details section */}
        <summary>
          {/* Rendering the question number and title */}
          {number} - {title}
        </summary>
        <>
          {/* Rendering the context paragraph */}
          <p>{content.context}</p>
          <>
            {/* Mapping through the bullet points and rendering them */}
            {content.bulletpoints.map((bulletPoint) => (
              <ul key={bulletPoint.id}>
                {/* Rendering the title for each bullet point */}
                <h4>{bulletPoint.title}</h4>
                {/* Rendering the content of each bullet point */}
                <li>{bulletPoint.point}</li>
              </ul>
            ))}
            <LoaderTopLevel />
          </>
        </>
      </details>
    </div>
  );
};
