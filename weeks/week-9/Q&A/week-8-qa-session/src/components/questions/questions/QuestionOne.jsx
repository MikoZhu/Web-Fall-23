import { useState, useEffect } from "react";
export const QuestionOne = ({ title, number }) => {
  const content = {
    context:
      "This question relates to the evolving mindset in React component structure, moving from a strict parent-child relationship to a more modular and atomic design approach, with considerations for state management and props. In modern React development, the traditional mindset of strictly 'parent' and 'child' components is evolving. Instead, the focus is shifting towards creating modular and reusable components, often inspired by the principles of atomic design.",
    bulletpoints: [
      {
        id: 1,
        title: "What Does 'Modular' Mean in React?",
        point:
          "A modular approach in React means building components that are self-contained, reusable, and can be combined in various ways to build more complex UIs. This approach promotes code reusability and maintainability.",
      },
      {
        id: 2,
        title: "Why Move Away from 'Parent' + 'Child'?",
        point:
          "While the parent-child relationship still exists, the emphasis is on thinking of components as individual units that can function independently. This reduces the tight coupling between components and enhances flexibility.",
      },
      {
        id: 3,
        title: "What is Atomic Design?",
        point:
          "Atomic design is a methodology for creating design systems. It breaks down UIs into basic components (atoms), which can be combined to form molecules, organisms, templates, and pages. This hierarchical structure aligns well with React's component-based architecture.",
      },
      {
        id: 4,
        title: "How Does This Benefit React Development?",
        point:
          "By adopting a modular and atomic design approach, developers can create a library of reusable components. This speeds up development, ensures consistency across the application, and makes it easier to update or extend features.",
      },
      {
        id: 5,
        title: "How Does State Management Fit In?",
        point:
          "In a modular approach, state management becomes more localized. Components manage their own state or rely on global state management solutions like Redux or Context API. This ensures that data flows efficiently, and components remain decoupled, making them easier to test and maintain.",
      },
      {
        id: 6,
        title: "What's the Role of Props?",
        point:
          "Props (short for 'properties') in React allow components to communicate and share data. In a modular structure, props become the medium through which data and functions are passed down, ensuring that components remain reusable and adaptable to different contexts.",
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
          </>
        </>
      </details>
    </div>
  );
};
