import { useCountStore } from "../../../stores/useCountStore";
export const QuestionThree = ({ title, number }) => {
  const content = {
    context:
      "In the context of Zustand in React, the 'getState' method is not a built-in method. It seems like there might be some confusion or misunderstanding. In Zustand, you don't typically use a 'getState' method. Instead, you directly access the state variables using the functions returned by the 'create' method when creating a store.",
    bulletpoints: [
      {
        id: 1,
        title: "Let's expand on the create method from zustand",
        point:
          "In Zustand, the create method is used to create a store for managing state. While the primary purpose of create is to define your state and its update functions, you can also pass additional parameters or dependencies to the store creation function. This can be useful when you need to access external values or services within your store's functions.",
      },
    ],
  };

  const { count, increment, decrement, logCount, isPositive, doubleCount } =
    useCountStore();

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
          <div>
            <p>Count: {count}</p>
            <button onClick={() => increment(10)}>Increment</button>
            <button onClick={() => decrement(1)}>Decrement</button>
            <button onClick={logCount}>Log Count</button>
            <p>Is Positive: {isPositive() ? "Yes" : "No"}</p>
            <p>Double Count: {doubleCount()}</p>
          </div>
        </>
      </details>
    </div>
  );
};
