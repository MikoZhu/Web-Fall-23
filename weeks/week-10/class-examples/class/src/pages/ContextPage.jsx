import Logos from "../components/Logos";
import { useTheme } from "../themes/ThemeContext";
import { ContextComp } from "../components/ContextComp";
export const ContextPage = () => {
  const text = {
    heading: "The Context API",
    intro: "Out of the box provided by React",
    loremIpsum:
      "The Context API is a built-in feature in React that provides a way to share data between components without the need to pass props manually through every intermediate component. It consists of two main parts: the Context.Provider and the useContext hook. Context.Provider: This component wraps a portion of your application and provides the data that needs to be shared globally. It takes a value prop, which holds the data to be shared. useContext Hook: Components can consume the data provided by the Context.Provider using the useContext hook. It allows components to access the global state without the need for prop drilling.",
  };
  // Destructure and assign variables from the 'useTheme' hook
  const { theme, alertIsaac } = useTheme();

  return (
    <>
      <Logos />
      <div>
        <h2>{text.heading}</h2>
        <p>{text.intro}</p>
        <p>{text.loremIpsum}</p>
        <h1>hello - {theme}</h1>
        <button onClick={alertIsaac}>ALRT</button>
        <ContextComp />
      </div>
    </>
  );
};
