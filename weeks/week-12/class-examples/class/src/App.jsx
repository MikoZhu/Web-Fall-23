// Importing necessary hooks from React
import { RefForm } from "./components/useRef/RefForm";
import { RefFormTwo } from "./components/useRef/RefFormTwo";
import { Example } from "./components/useRef/Example";
import { StateForm } from "./components/useRef/StateForm";
import { ClassExcercise } from "./components/useLayoutEffect/ClassExcercise";

// Defining and exporting the App component
export const App = () => {
  // Returning JSX to render the component UI
  return (
    <div>
      {/* UseRef Hook */}
      <Example />
      <StateForm />
      <RefForm />
      <RefFormTwo />
      {/* Use Layout Effect */}
      <ClassExcercise />
    </div>
  );
};
