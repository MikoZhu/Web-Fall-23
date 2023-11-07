import { useReducer } from "react";

// Define the reducer function that will manage the state changes based on dispatched actions.
const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      // When the 'increment1' action is dispatched, increment counter1 by 1.
      // We also want to decrement counter2 by 1 as per the initial requirement,
      // hence the counter2 state is decreased.
      return {
        ...state, // Spread the current state to maintain other properties.
        counter1: state.counter1 + 1, // Increment counter1.
        counter2: state.counter2 - 1, // Decrement counter2.
      };
    default:
      // Return the current state if no matching action type is found.
      return state;
  }
};

// Wait, can I place the variable reducer below inside the component?. Why is this variable placed above/outside the component itself ?
// Yes, you can refactor the code to place the reducer function inside the component if you prefer to encapsulate everything related to the component within the same block. However, it's important to note that if the reducer is inside the component, it will be re-created on every render, which isn't necessary.

// in simpler terms putting the reducer function inside a React component means it gets unnecessarily remade every time the component updates, which can waste resources.

export const CounterReducer = () => {
  // Initialize the useReducer hook with the reducer function and initial state.
  const [state, dispatch] = useReducer(reducer, { counter1: 0, counter2: 100 });
  return (
    <div className="bordered">
      <div className="inner">
        <h3>UseReducer Counter</h3>
        {/* Display the current value of counter1 from the state. */}
        <p>{`Counter One value is: ${state.counter1}`}</p>
        {/* Display the current value of counter2 from the state. */}
        <p>{`Counter Two value is: ${state.counter2}`}</p>
        {/* Render a button that, when clicked, will dispatch an 'increment1' action 
          which will trigger the reducer to update the state accordingly. */}
        <button onClick={() => dispatch({ type: "increment1" })}>
          Increase Counter #1
        </button>
      </div>
    </div>
  );
};
