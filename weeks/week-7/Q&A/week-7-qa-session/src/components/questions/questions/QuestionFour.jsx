export const QuestionFour = ({ title, number }) => {
  const content = {
    context:
      "Postman is a widely-used tool among developers for testing APIs, which allows users to send requests to web servers and get responses back. It provides a user-friendly interface to send HTTP requests to the server and view the responses, which can be crucial in API development and testing.",
    bulletpoints: [
      {
        id: 1,
        title: "What is Postman?",
        point:
          "Postman is a collaboration platform for API development, which helps to simplify each step of building an API and streamline collaboration so you can create better APIs—faster.",
      },
      {
        id: 2,
        title: "Why Use Postman?",
        point:
          "It provides a graphical interface that allows developers to easily configure, interact with, and visualize API responses without needing to write code. It supports automated testing, provides detailed logging, and allows you to organize your tests in collections for reuse in various environments.",
      },
      {
        id: 3,
        title: "How to Use Postman?",
        point:
          "In Postman, you can create a request (GET, POST, PUT, DELETE, etc.) by specifying the request type, entering the API endpoint URL, setting up headers (if needed), and configuring the body payload for POST/PUT requests. After sending the request, Postman displays the server’s response, which can be analyzed in the tool.",
      },
      {
        id: 4,
        title: "Utilizing Postman in API Testing?",
        point:
          "Postman allows you to manually or automatically send HTTP requests and view responses, facilitating API testing by enabling you to create test suites, manage versions, and utilize variables for dynamic testing which can mimic different environments and use-cases.",
      },
    ],
  };

  return (
    <div className="question-outer-container">
      <details>
        <a
          href="https://www.youtube.com/watch?v=wmz1sGZp814"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tutorial Short
        </a>
        <a
          href="https://www.youtube.com/watch?v=VywxIQ2ZXw4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tutorial - Long
        </a>

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
