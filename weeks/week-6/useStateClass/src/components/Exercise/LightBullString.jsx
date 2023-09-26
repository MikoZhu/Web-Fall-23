import { useState } from "react";

export const LightBullString = () => {
  // Initialize our data
  const [status, setStatus] = useState("off");

  const toggleLight = () => {
    setStatus((previousStatus) => (previousStatus === "off" ? "on" : "off"));
  };

  return (
    <div className="lightbulb-container">
      <div className={`lightbulb ${status}`} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};
