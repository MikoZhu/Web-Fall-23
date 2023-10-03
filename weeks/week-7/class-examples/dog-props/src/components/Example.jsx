import { useEffect, useState } from "react";

export const Example = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  // Structure of useEffect hook

  //   useEffect(() => {});
  //   useEffect(() => {}, []);

  // -----------------
  // -----------------
  // -----------------

  // Example 1: Runs on every render
  // UNCOMMENT TO SHOW CASE
  // ------
  useEffect(() => {
    console.log("I Re-rendered");
  });

  // Explanation:   Without dependencies, useEffect runs after every render. This is useful when you want to execute a side effect every time the component updates.

  // -----------------
  // -----------------
  // -----------------

  // // Example 2: Runs once after the initial render
  // Same as componentDidMount Alternative'
  // Has dependency array
  // Basically it tells react to run once the component did mount
  // UNCOMMENT TO SHOW CASE
  // ------
  useEffect(() => {
    console.log("This component has mounted");
  }, []);

  // Explanation: With an empty dependency array [], useEffect runs once after the initial render, mimicking componentDidMount. This is useful for one-time setups like fetching data.

  // -----------------
  // -----------------
  // -----------------

  // Example 3: Runs after the initial render and when specified dependencies change
  // It runs on the first render + whenever a dependency changes - 'same as componentDidUpdate Alternative'
  // Look at removing the dependency and see the warning on the console
  // UNCOMMENT TO SHOW CASE
  // ------
  useEffect(() => {
    console.log(`The name has changed: ${name}`);
  }, [name]);

  // Explanation:  When dependencies [name] are specified, useEffect runs after the initial render and whenever the specified dependencies change, similar to componentDidUpdate. This is useful to handle side effects related to certain state/props changes.

  // -----------------
  // -----------------
  // -----------------

  // Example 4: Runs once after the initial render and has a cleanup function
  // It runs on the first render + cleanup function- 'same as componentDidMount Alternative'
  // Has dependency array
  // Basically it tells react to run once the component did mount
  // UNCOMMENT TO SHOW CASE
  // ------
  useEffect(() => {
    console.log(`The name has changed: ${name}`);

    return () => {
      // This is known as a cleanUp function
      console.log("The component has been unmounted");
    };
  }, [name]);

  // Explanation: In the code above, the dependency array includes [name], signifying that the hook will execute its side-effect logic after the initial render and subsequently whenever the name state alters. The side-effect logic, in this case, logs a message to the console, providing a real-time update whenever name changes. Additionally, a cleanup function is returned, which executes right before the component unmounts or before the side-effect logic runs on subsequent renders. This cleanup function, logging a different message to the console, is pivotal for managing any revertible actions or cleanups related to the side-effects, ensuring optimal performance and preventing potential memory leaks by handling tasks like deregistering event listeners or canceling network requests.

  // Example 5: Runs once after the initial render and has a cleanup function
  // Follows the same rules, except it handles the unmounting on a component - 'same as componentWillUnmount Alternative'
  // UNCOMMENT TO SHOW CASE
  // ------
  useEffect(() => {
    console.log("Attach Listener");
    window.addEventListener("resize", updateWindowWidth);

    //cleanup function in full effect
    //comment out to explain the problem with the automatic re-=renders even tough they are not visible
    return () => {
      console.log("Dettach Listener");
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // Explanation: example, an empty dependency array [] indicates that the side-effect logic will only execute once after the initial render, mimicking the componentDidMount lifecycle method in class components. Upon execution, a message "Attach Listener" is logged to the console, and an event listener for window resizing is established, invoking the updateWindowWidth function whenever a resize event occurs. This function, updateWindowWidth, updates the component’s state, windowWidth, with the current inner width of the window, potentially triggering a re-render. Crucially, a cleanup function is provided, which logs "Detach Listener" to the console and removes the previously set event listener. This cleanup function will be invoked when the component is unmounted from the DOM, ensuring that the event listener is removed to prevent memory leaks and avoid unnecessary operations when the component is no longer present in the UI. This pattern demonstrates a practical application of useEffect to manage side-effects and their cleanup in a React functional component.

  // -----------------
  // -----------------
  // -----------------

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
