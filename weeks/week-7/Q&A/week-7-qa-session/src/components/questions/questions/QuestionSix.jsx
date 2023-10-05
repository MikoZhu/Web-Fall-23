export const QuestionSix = ({ title, number }) => {
  const content = {
    context:
      "Making a POST request involves sending data to a server in a specific format, often JSON, and 'async/await' in JavaScript is used to work with asynchronous code more comfortably. The question delves into the syntax of a POST request, data handling with JSON.stringify, and the application of 'async/await' in the context of a React project.",
    bulletpoints: [
      {
        id: 1,
        title: "Syntax for a POST Fetch Request",
        point:
          "A POST fetch request is used to send data to a server. It needs a URL to send the request to, and an options object that includes method, headers, and body, where you place the data you want to send.",
      },
      {
        id: 2,
        title: "Using JSON.stringify and Data Types",
        point:
          "JSON.stringify converts JavaScript data into a JSON string. It can be used with various data types, including numbers, as it converts the entire input into a string format suitable for transmission over the network.",
      },
      {
        id: 3,
        title: "Understanding 'async' and 'await'",
        point:
          "'async' and 'await' are used to work with asynchronous code in a more synchronous manner, making it easier to read and understand. 'async' is used to declare an asynchronous function, and 'await' is used inside an 'async' function to wait for a Promise to resolve.",
      },
      {
        id: 4,
        title: "Applying 'async/await' in React",
        point:
          "In React, 'async/await' can be used for handling asynchronous operations, like fetching data, in a way that is easier to read and write. It's particularly useful when dealing with promises, like the ones returned by fetch requests.",
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
