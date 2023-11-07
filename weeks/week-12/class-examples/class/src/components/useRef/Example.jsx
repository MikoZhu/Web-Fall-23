import { useRef, useEffect } from "react";
import { Comparison } from "./Comparison";

export const Example = () => {
  // Creating refs for different HTML elements.
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const paragraphRef = useRef(null);
  const paragraphToggleRef = useRef(null);

  // This effect runs once after the component mounts.
  useEffect(() => {
    // Focus the input field as soon as the component is mounted.
    inputRef.current.focus();
    // Change the value of the input field to "I love Ikea".
    inputRef.current.placeholder = "I love Ikea";
  }, []); // Empty dependency array means this effect will run only once after mount.

  // Function to change the color of the paragraph.
  const changeColor = () => {
    // Changing the style of the paragraph directly using the ref.
    paragraphRef.current.style.color = "blue";
  };

  // Function to change the color of the paragraph by toggling a class name.
  const changeColorTwo = () => {
    // Toggling the 'blue-text' class on the paragraph using the ref.
    paragraphToggleRef.current.classList.toggle("blue-text");
  };

  // Function to trigger a click on the button from another event.
  const simulateButtonClick = () => {
    // Simulating a button click via the ref.
    buttonRef.current.click();
    alert("I have been clicked");
  };

  return (
    <>
      <div>
        {/* Attaching the inputRef to the input element to access it directly. */}
        <input ref={inputRef} type="text" placeholder="Focus on me on load" />

        {/* The button has a ref attached and an onClick event to change the paragraph color. */}
        <button ref={buttonRef} onClick={changeColor}>
          Change Color of the Text Below
        </button>

        {/* This button uses the changeColorTwo function to toggle a class name. */}
        <button onClick={changeColorTwo}>
          Toggle Class Name of the Text Below
        </button>

        {/* This paragraph's color will be changed by clicking the button above. */}
        <p ref={paragraphRef}>This text will change color.</p>

        <p ref={paragraphToggleRef} className="default-color">
          {" "}
          This text will toggle between classes to change the color
        </p>

        {/* Another button to demonstrate ref interaction between elements. */}
        <button onClick={simulateButtonClick}>
          Click to Trigger Another Button's Click
        </button>
      </div>
      <Comparison />
    </>
  );
};
