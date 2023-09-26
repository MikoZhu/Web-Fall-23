import { useState } from "react";

export const Data = () => {
  // Number Data Type
  const [count, setCount] = useState(0); // rep of a number type :)

  const increment = () => setCount((count) => count + 1);

  // using a text data type
  const [text, setText] = useState("");
  const updateText = () => setText(text + " I love coding  ");

  // Using a boolean data type
  const [isVisible, setIsVisible] = useState(false);
  const toggleBoolean = () => setIsVisible(!isVisible);
  return (
    <div className="card">
      {/* Number Type */}
      <button onClick={increment}>count is {count}</button>
      {/* String/text Type */}
      <div>
        <p>Text is: {text}</p>
        <button onClick={updateText}>Add Text </button>
      </div>
      {/* Boolean */}
      <div>
        <p>
          Visbility is currently:{" "}
          {isVisible ? "is visibile" : "is currently not visible"}
        </p>
        <button onClick={toggleBoolean}>Turn Visibile</button>
      </div>
    </div>
  );
};
