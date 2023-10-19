export const QuestionEight = ({ title, number }) => {
  const content = {
    context:
      "React gives us tools like `useState` and `useEffect` to help us manage our component's data and actions. The question is about whether it's better to use `useEffect` to automatically run functions when certain data changes, or to have them run directly when a user does something, like clicking a button.",
    bulletpoints: [
      {
        id: 1,
        title: "Fetching Data with useEffect",
        point:
          "In the first example, `useEffect` is used to grab data when the component first shows up. It helps us get and show data, and handle any loading or error messages.",
      },
      {
        id: 2,
        title: "Running a Function with a Button Click",
        point:
          "In the second example, a function (`loadData`) is run when a button is clicked. This changes some data, which then triggers `useEffect` to run and do something (like showing a message).",
      },
      {
        id: 3,
        title: "Choosing Between useEffect and Direct Function Calls",
        point:
          "Choosing between using `useEffect` and calling a function directly depends on what you're trying to do, and which one makes the code easier to understand.",
      },
      {
        id: 4,
        title: "Thinking About Bigger Projects",
        point:
          "Both ways of doing things are okay, but it's important to think about which one will make your code easier to work with in the future, especially if your project gets bigger.",
      },
    ],
  };

  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
        </summary>
        <>
          <p>{content.context}</p>
          <>
            {content.bulletpoints.map((bulletPoint, index, array) => {
              console.log(array); // This will log the entire array for each iteration
              return (
                <ul key={bulletPoint.id}>
                  <h4>{bulletPoint.title}</h4>
                  <li>{bulletPoint.point}</li>
                </ul>
              );
            })}
          </>
        </>
      </details>
    </div>
  );
};
