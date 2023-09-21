export const QuestionZero = ({ title, number }) => {
  const content = {
    context:
      "In React, when you're rendering a list of elements dynamically, each element needs a unique identifier called a key. This key helps React identify which items have changed, are added, or are removed, making the rendering process more efficient.",
    bulletpoints: [
      {
        id: 1,
        title: "Do you always need a key?",
        point:
          "When you're mapping over an array to produce JSX elements, you should provide a key prop to each element. In short, using stable and unique keys helps avoid mix-ups and keeps your app running smoothly!",
      },
      {
        id: 2,
        title: "What can be used as a key?",
        point:
          "Ideally, the key should be a unique identifier. While it's common to use IDs from your data as keys, you can use other attributes as long as they are unique within the list. It's not recommended to use indices or non-unique data like names unless you're certain they won't change and are unique.",
      },
      {
        id: 3,
        title: "Why not use Index or non-unique data as Keys?",
        point:
          "They Can Change: If you use the position (index) or names as keys, and they change, it can mix up the list and cause errors because React gets confused about which item is which. This leads to performance issues due to using changing or non-unique keys can slow down your app because React has to do more work to keep track of the elements.",
      },
      {
        id: 4,
        title: "What to Use as Keys?",
        point:
          "It's best to use something unique and stable, like an ID from your data, as a key. From a real life database these will auto generated through a function ;)",
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
