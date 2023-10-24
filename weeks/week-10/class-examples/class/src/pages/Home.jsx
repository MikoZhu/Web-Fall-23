import Logos from "../components/Logos";

function Home() {
  const text = {
    heading: "Global State Management in React",
    subheading:
      "Learning how to use the Context API & Zustand State Management Library",
    intro:
      "Global state management in React is a fundamental concept that helps developers manage and share data across different parts of a React application. It is particularly useful when dealing with complex applications with many components that need access to the same data, or when you want to avoid 'prop drilling.'",
    cleanup: "Why Use Global State Management?",
    html: `<ol>
    <li>
      Avoid Prop Drilling: Prop drilling occurs when you need to pass data down multiple levels of nested components. This can make your code more complex and harder to maintain. Global state management eliminates the need for prop drilling by providing a centralized store of data that can be accessed from anywhere in your app.
    </li>
    <li>
      Synchronize State: In a complex application, it's crucial to ensure that different parts of your app have access to the same up-to-date data. Global state management ensures that changes to the data are synchronized across components, reducing bugs related to stale or inconsistent data.
    </li>
    <li>
      Modular Code: Global state management allows you to create more modular and reusable components. Components can focus on rendering and behavior without being tightly coupled to the data they display.
    </li>
    <li>
      Improved Developer Experience: It simplifies the development process by providing a clear and organized way to manage data. Developers spend less time passing props and tracking data flow, leading to increased productivity.
    </li>
  </ol>
  `,
  };

  return (
    <>
      <Logos />
      <h1 className="heading">{text.heading}</h1>
      <h2>{text.subheading}</h2>
      <p>{text.intro}</p>
      <p>{text.cleanup}</p>
      {/* Example of using a js property to inject dyanmic html */}
      <div dangerouslySetInnerHTML={{ __html: text.html }} />
    </>
  );
}

export default Home;
