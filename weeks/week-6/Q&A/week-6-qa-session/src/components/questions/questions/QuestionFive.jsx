export const QuestionFive = ({ title, number, count, setCount }) => {
  const content = {
    context:
      "The useState hook in React allows us to add state to our functional components. State is essentially any data that should be saved about a component’s interaction over time.",
    bulletpoints: [
      {
        id: 1,
        title: "Why?",
        point:
          "While you can technically use useState in any component, it's not always ideal to have every component manage its own state. Sometimes, you want multiple components to share and interact with the same data. This is where the concept of 'lifting state up' comes into play.",
      },
      {
        id: 2,
        title: "How?",
        point:
          "Imagine you have several child components that need to share the same piece of data. Instead of each of them having their own local state, you'd 'lift' the state to their closest common parent component. This parent component would then manage this shared state and pass it down to the child components through props.",
      },
      {
        id: 3,
        title:
          "This design pattern is known as 'lifting state up.' By doing this, you ensure:",
        point:
          "Consistency: All child components receive and interact with the same piece of data, ensuring it remains consistent across the board.",
      },
      {
        id: 4,
        title:
          "This design pattern is known as 'lifting state up.' By doing this, you ensure:",
        point:
          "Efficient Data Flow: It allows for a clear and efficient flow of data between components. When a child component needs to update the state, it can do so through callback functions also passed down by the parent.",
      },
      {
        id: 5,
        title:
          "This design pattern is known as 'lifting state up.' By doing this, you ensure:",
        point:
          "Flexibility: It provides flexibility in terms of where and how data is managed and used in your application.",
      },
    ],
  };

  // Logic to receive prop data which is a number from parent and add here through this function - +1
  const countPlusOne = () => setCount(count + 1);
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
            <button onClick={countPlusOne}>
              Counnt + 1 - Count is: {count}
            </button>
          </>
        </>
      </details>
    </div>
  );
};
