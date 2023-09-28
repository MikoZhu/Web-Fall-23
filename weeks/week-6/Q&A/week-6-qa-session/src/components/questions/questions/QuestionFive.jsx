export const QuestionFive = ({ title, number }) => {
  const content = {
    context: "You are looking at it :) lets go through it at again",
  };
  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
        </summary>
        <>
          <p>{content.context}</p>
        </>
      </details>
    </div>
  );
};
