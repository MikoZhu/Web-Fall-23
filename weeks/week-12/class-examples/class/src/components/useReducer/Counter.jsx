import { useState, useEffect } from "react";

//Suppose we want to decrease counter2 by 1 whenver counter1 Changes
export const Counter = () => {
  // Initialize two state variables:
  // counter1 is initialized to 0.
  const [counter1, setCounter1] = useState(0);
  // counter2 is initialized to 100.
  const [counter2, setCounter2] = useState(100);

  // Use the useEffect hook to perform side effects in the component.
  // In this case, it's used to change counter2 whenever counter1 changes.
  useEffect(() => {
    // Check if counter1 is not the initial value (not falsy, 0 is falsy in JavaScript).
    // This check is to prevent counter2 from decrementing on the initial render.
    if (counter1) {
      // If counter1 has changed (and is not 0), decrement counter2 by 1.
      setCounter2((count) => count - 1);
    }
    // The effect depends on counter1, so it runs whenever counter1 changes.
  }, [counter1]);

  const decreaseCounterTwo = () => setCounter1((value) => value + 1);
  return (
    <div className="bordered">
      <div className="inner">
        <h3>Use State Counter</h3>
        <p>{`Counter One value is: ${counter1}`}</p>
        <p>{`Counter Two value is: ${counter2}`}</p>
        <button onClick={decreaseCounterTwo}>Incrase counter #1</button>
      </div>
    </div>
  );
};
