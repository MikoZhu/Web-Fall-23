export const QuestionEleven = ({ title, number }) => {
  const content = {
    context: `In our Pokémon example, we put data.json in app.jsx to show how to share data between components, like giving information from a parent to a child component. By keeping data at the top, in app.jsx, it makes sharing and managing information easier across different parts of our app. This way of sharing data might seem a bit tricky at first, but it's really important to learn before we get into more advanced ways of managing data, which we'll cover later on. `,
    bulletpoints: [
      {
        id: 1,
        title: "Top Level State Data",
        point:
          "Keeping data at the top level, often referred to as 'lifting state up,' is not only good for managing and sharing information but also for maintaining a clean and efficient application structure. It allows for a single source of truth, meaning your data lives in one place, making it easier to debug and manage state changes. This approach ensures that components are synchronized and consistent throughout the application, reducing the risk of errors and discrepancies. So, mastering this concept of top-level state data is a significant step in becoming proficient in React development!",
      },
      {
        id: 2,
        title: "In simpler terms...",
        point:
          "Keeping data at the top level for example our app.jsx file is the top-level file with the entry point to the app in React is like having one main control center; it makes managing and sharing information simpler, keeps your app organized, and helps avoid mistakes, making your development journey smoother! Keep learning!",
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
