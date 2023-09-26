import { useState } from "react";
import "./index.css";

export const LightBulb = () => {
  // Initialize the state for on/off
  const [on, setOn] = useState(false);
  const toggleLight = () => {
    // Toggle the on/off state
    setOn((previousStateOn) => !previousStateOn);
    console.log(on);
    console.log("Clicked");
  };
  return (
    <div className="lightbulb-container">
      <div className={`lightbulb ${on ? "on" : "off"}`} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};
