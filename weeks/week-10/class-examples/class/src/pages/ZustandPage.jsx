import Logos from "../components/Logos";
import { ZustandComp } from "../components/ZustandComp";

export const ZustandPage = () => {
  const text = {
    heading: "Zustand",
    intro:
      "Third Party Library for state management - download using npm install zustand",
    expOne:
      "Zustand is a popular state management library for React that simplifies the process of managing global state. It provides a minimalistic API for creating and using global state. Zustand is known for its simplicity and small bundle size, making it a lightweight choice for state management.",
    expTwo:
      "With Zustand, you can define stores that contain your application's data and logic. These stores can be accessed and modified from any component in your app. Zustand also offers built-in support for asynchronous actions and computed state.",
    expThreeTitle:
      "Can i use reactive data such as the use State hook in zustand stores ?",
    expThree:
      "In Zustand, you define state variables and their associated update functions within a store using the create function. When you want to update the state, you call these update functions provided by Zustand, and Zustand takes care of the reactivity behind the scenes.While Zustand provides a similar interface for managing state and updating it, it doesn't use the useState hook or the concept of 'hooks' in the same way as React. Zustand's reactivity mechanism is more lightweight and optimized for use outside of React components, such as in plain JavaScript functions or non-React contexts. In summary, you cannot directly use the useState hook within Zustand stores because Zustand has its own way of managing and updating state through the provided functions.",
  };

  return (
    <>
      <Logos />
      <div>
        <h2>{text.heading}</h2>
        <p>{text.intro}</p>
        <p>{text.expOne}</p>
        <p>{text.expTwo}</p>
        <h3>{text.expThreeTitle}</h3>
        <p>{text.expThree}</p>
      </div>
      <ZustandComp />
    </>
  );
};
