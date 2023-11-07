import { useRef, useState } from "react";
import "./animations.css"; // Make sure to import the stylesheet

export const Animation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  // Determine the class for the sliding div based on isOpen state
  const slidingDivClass = isOpen ? "slide-in" : "slide-out";

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      <div
        ref={ref}
        className={`sliding-div ${slidingDivClass}`} // Apply classes here
      >
        This content will slide in and out
      </div>
    </div>
  );
};
