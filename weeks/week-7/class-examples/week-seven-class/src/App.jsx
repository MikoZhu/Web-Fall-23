import { Example } from "./components/Example";
import { ExampleOne } from "./components/ExampleOne";
import { ExampleTwo } from "./components/ExampleTwo";
import { ExampleThree } from "./components/ExampleThree";
import { ExampleFour } from "./components/ExampleFour";

export const App = () => {
  return (
    <>
      <h1>Learning the useEffect() Hook in react</h1>
      <div className="card">
        <p>place comps here....</p>
        <Example />
        <ExampleOne />
        <ExampleTwo />
        <ExampleThree />
        <ExampleFour />
      </div>
    </>
  );
};
