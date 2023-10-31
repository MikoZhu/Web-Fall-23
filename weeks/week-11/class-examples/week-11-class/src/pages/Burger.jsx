import Logos from "../components/Logos";
import { BurgerMenu } from "../components/BurgerMenu";

export const Burger = () => {
  const text = {
    heading:
      "Integrating react-burger-menu inside a react-functional component",
    intro:
      "An off-canvas sidebar React component with a collection of effects and styles using CSS transitions and SVG path animations.",
  };
  return (
    <>
      <Logos />
      <div>
        <h2>{text.heading}</h2>
        <p>{text.intro}</p>
      </div>
      <BurgerMenu />
    </>
  );
};
