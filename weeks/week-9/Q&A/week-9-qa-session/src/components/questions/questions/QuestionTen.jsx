export const QuestionTen = ({ title, number }) => {
  const content = {
    context:
      "Postman is a tool that helps developers check if APIs (ways that different bits of software talk to each other) are working right. The question is about how to use Postman and if we can use the inspect tool in our web browsers instead for the same tasks.",
    bulletpoints: [
      {
        id: 1,
        title: "What is Postman?",
        point:
          "Postman is like a testing ground for APIs, where developers can try out different requests and see the answers in an easy-to-read way.",
      },
      {
        id: 2,
        title: "Why Use Postman?",
        point:
          "It makes working with APIs easier by letting developers try things out, organize their work, and share it with others.",
      },
      {
        id: 3,
        title: "Using the Browser's Inspect Tool Instead?",
        point:
          "The inspect tool in browsers lets you see some info about how a webpage talks to the server, but it doesn't have all the helpful features that Postman does for testing APIs.",
      },
      {
        id: 4,
        title: "When to Use the Inspect Tool?",
        point:
          "The inspect tool is good for a quick look at what's happening between a webpage and a server, but for deeper testing, Postman is usually better.",
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
