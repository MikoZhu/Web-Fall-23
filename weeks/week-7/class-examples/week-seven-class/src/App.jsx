import { useState } from "react";
import { Example } from "./components/Example";
import { ExampleFour } from "./components/ExampleFour";
import { ExampleOne } from "./components/ExampleOne";

export const App = () => {
  return (
    <>
      <h1>Learning the useEffect() Hook in react</h1>
      <div className="card">
        {/* Explanation of useEffect */}
        {/* <Example /> */}
        <ExampleOne />
        <ExampleFour />
      </div>
    </>
  );
};
