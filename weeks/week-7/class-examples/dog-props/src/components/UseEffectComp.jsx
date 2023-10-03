import { useEffect, useState } from "react";

export const useEffectComp = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  //It runs on every render of the component\
  useEffect(() => {
    console.log("I Re-rendered");
  });

  // It runs on the first render - 'same as componentDidMount Alternative'
  // Has dependency array
  // Basically it tells react to run once the component did mount
  useEffect(() => {}, []);

  // It runs on the first render + whenever a dependency changes - 'same as componentDidUpdate Alternative'
  // Look at removing the dependency and see the warning on the console
  useEffect(() => {
    console.log(`The name has cchanged: ${name}`);
  }, [name]);
  return (
    <div>
      <h2>The useEffectHook</h2>
      <p>The window width is: {windowWidth}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
