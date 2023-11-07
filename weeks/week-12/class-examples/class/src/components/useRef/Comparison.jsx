import { useState, useRef, useEffect } from "react";

export const Comparison = () => {
  // Using useRef to directly manipulate the DOM without causing re-renders.
  const paragraphRef = useRef(null);

  // Using useState to toggle the class by causing a re-render.
  const [isBlue, setIsBlue] = useState(false);

  // Function to change the color of the paragraph using useRef.
  // This directly manipulates the DOM, and doesn't cause a re-render.
  const changeColorWithRef = () => {
    paragraphRef.current.classList.toggle("blue-text");
  };

  // Function to change the color of the paragraph using useState.
  // This changes state, and causes a re-render.
  const changeColorWithState = () => {
    setIsBlue(!isBlue);
  };

  return (
    <div className="bordered">
      {/* Paragraph manipulated by useRef */}
      <p ref={paragraphRef} className="initial-class">
        This text changes color with useRef (no re-render).
      </p>
      <button onClick={changeColorWithRef}>Change Color with useRef</button>

      {/* Spacer */}
      <hr />

      {/* Paragraph manipulated by useState */}
      {/* The className changes when isBlue changes, causing a re-render */}
      <p className={isBlue ? "blue-text" : "initial-class"}>
        This text changes color with useState (re-render).
      </p>
      <button onClick={changeColorWithState}>Change Color with useState</button>
    </div>
  );
};
