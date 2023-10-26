import { useState, useEffect } from "react";
export const QuestionOne = ({ title, number }) => {
  const content = {
    context:
      "Certainly! In React Router, both Link and useNavigate() serve the purpose of navigating within your application, but they have different use cases and scenarios where one might be preferred over the other.",
    bulletpoints: [
      {
        id: 1,
        title: "Link",
        point:
          "is a component provided by React Router that creates a hyperlink to a specified route. Why use it?  It's a good choice for creating navigation links, such as in navigation bars or menus, where you want to render anchor tags (<a>) to different routes.",
      },
      {
        id: 2,
        title: "useNavigate()",
        point:
          "useNavigate() is a hook provided by React Router that returns a navigation function. Why use it: It's particularly useful when you want to trigger navigation programmatically, for example, after some event or user interaction.",
      },
      {
        id: 3,
        title: "So, should you substitute Link with useNavigate?",
        point:
          "The choice between Link and useNavigate() depends on your specific use case:",
      },
      {
        id: 4,
        title: "Link",
        point:
          "Use Link when you need to render navigation links in your JSX, especially in components like menus or navigation bars. It provides a straightforward way to create link.",
      },
      {
        id: 5,
        title: "useNavigate()",
        point:
          "Use useNavigate() when you want to navigate programmatically, for instance, in response to user actions or after an asynchronous operation. It gives you more control over when and how navigation occurs.",
      },
      {
        id: 6,
        title: "Summary",
        point:
          "In many cases, you might even use them together in your application, each serving its purpose. React Router is flexible, allowing you to choose the navigation method that best fits the context of your application.",
      },
      {
        id: 7,
        title: "In action",
        point: "Let's say how to implement thew useNavigate() hook",
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
              //console.log(array); // This will log the entire array for each iteration
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
