export const QuestionThirtheen = ({ title, number }) => {
  // This is a concise functional component used inside the comp question 13, which directly returns a div containing an h4 element with the text "Hello there!" and a p element with the text "More text here!".
  const myComponent = () => (
    <div>
      <h4>Hello there!</h4>
      <p>More text here!</p>
    </div>
  );

  // This is a functional component in React named myComponentTwo used inside the comp question 13. It has a constant variable text with the value "Hello There". This component returns a div containing an h4 element displaying the value of text, and a p element displaying the string "More text here!". The curly braces {} around text are used to inject the JavaScript variable into the JSX.
  const myComponentTwo = () => {
    const text = "Hello There";
    console.log(text);
    return (
      <div>
        <h4>{text}</h4>
        <p>More text here!</p>
      </div>
    );
  };

  const content = {
    context:
      "In React, you use curly braces {} to inject JavaScript variables or expressions directly into JSX, and you use parentheses () to group multiple elements or to return elements from a component or a function.",
    bulletpoints: [
      {
        id: 1,
        title: "For example, if you have a variable:",
        point: "const greeting = 'Hello, World!';",
      },
      {
        id: 2,
        title: "You would inject it into JSX using curly braces:",
        point: "<div>{greeting}</div>",
      },
      {
        id: 3,
        title:
          "And if you are returning multiple elements from a component or a function, you would group them using parentheses:",
        point: `function MyComponent() {
                return (
                  <div>
                    <h1>{greeting}</h1>
                    <p>More text here!</p>
                  </div>
                );
              }`,
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
          {myComponent()}
          {myComponentTwo()}
        </>
      </details>
    </div>
  );
};
