// Importing necessary hooks from React
import { RefForm } from "./components/useRef/RefForm";
import { RefFormTwo } from "./components/useRef/RefFormTwo";
import { Example } from "./components/useRef/Example";
import { Animation } from "./components/useRef/animation/Animation";
import { HamburgerMenu } from "./components/useRef/burgerMenu/Hamburgermenu";
import { StateForm } from "./components/useRef/StateForm";
import { ClassExcercise } from "./components/useLayoutEffect/ClassExcercise";
import { ClassExcerciseWithUseEffect } from "./components/useLayoutEffect/ClassExcerciseWithUseEffect";
import { SimpleTodoList } from "./components/useReducer/SimpleToDoList";
import { SimpleToDoListUseState } from "./components/useReducer/SimpleToDoListUseState";
import { Counter } from "./components/useReducer/Counter";
import { CounterReducer } from "./components/useReducer/CounterReducer";
import { FetchFacts } from "./components/customHooks/FetchFacts";
// Defining and exporting the App component
export const App = () => {
  // Returning JSX to render the component UI
  return (
    <div>
      {/* UseRef Hook */}
      <HamburgerMenu />
      <Animation />
      <Example />
      <StateForm />
      <RefForm />
      <RefFormTwo />
      {/* Use Layout Effect */}
      <ClassExcerciseWithUseEffect />
      <ClassExcercise />
      {/* Use reducer Hook */}
      <SimpleTodoList />
      <SimpleToDoListUseState />
      <Counter />
      <CounterReducer />
      {/* Custom Hooks */}
      <FetchFacts />
    </div>
  );
};
