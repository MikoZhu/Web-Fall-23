export const QuestionEight = ({ title, number }) => {
  const content = {
    context:
      "Explore the benefits of styled-components in React, such as better component isolation, cleaner code, and dynamic styling, compared to the conventional approach of importing external CSS files.",
    bulletpoints: [
      {
        id: 1,
        title: "Component Isolation",
        point:
          "Styled-components offer encapsulation, ensuring that styles don't leak out or interfere with other components.",
      },
      {
        id: 2,
        title: "Cleaner Code",
        point:
          "Styling is directly associated with components, leading to more maintainable and readable code.",
      },
      {
        id: 3,
        title: "Dynamic Styling",
        point:
          "Styled-components allow for dynamic styling based on props and states, enhancing flexibility in component styling.",
      },
      {
        id: 4,
        title: "Ease of Maintenance",
        point:
          "Styled-components make it easier to manage and refactor styles, as they are co-located with the component code, reducing the risk of 'style spaghetti' in large projects.",
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
