export const QuestionSix = ({ title, number, count, setCount }) => {
  const content = {
    context:
      "This button multiplies by 2 the count variable placed above which is the concept of top-level state",
  };

  // Logic to receive prop data which is a number from parent and add here through this function - *2
  const countPlusOne = () => setCount(count * 2);
  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
        </summary>
        <>
          <p>{content.context}</p>
        </>
        <button onClick={countPlusOne}>Counnt + 1 - Count is: {count}</button>
      </details>
    </div>
  );
};
