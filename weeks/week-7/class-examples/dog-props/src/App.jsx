import { Example } from "./components/Example";
import { ExampleOne } from "./components/ExampleOne";
import { ExampleTwo } from "./components/ExampleTwo";
import { ExampleThree } from "./components/ExampleThree";

export const App = () => {
  return (
    <>
      <div>{/* <Example /> */}</div>
      <h1>Dog Props</h1>
      <div className="card">
        <ExampleOne />
        <ExampleTwo />
        <ExampleThree />
      </div>
    </>
  );
};
