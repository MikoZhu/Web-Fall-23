export const QuestionFive = ({ title, number }) => {
  const content = {
    context:
      "When designing the navigation bar in a React application, you can choose between creating a separate navigation component or including the navigation within the main app component.",
    bulletpoints: [
      {
        id: 1,
        title: "Separate Navigation Component",
        point:
          "Creating a dedicated <Navigation /> component can enhance reusability and maintainability when navigation logic is complex or shared across multiple pages.",
      },
      {
        id: 2,
        title: "Including <nav> Tag",
        point:
          "Using the <nav> HTML tag within the main app component can be suitable for simpler navigation structures or when the navigation is closely tied to the overall layout.",
      },
      {
        id: 3,
        title: "Consider Project Needs",
        point:
          "Choose the approach that best suits your project's requirements and complexity.",
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
          </>
        </>
      </details>
    </div>
  );
};
