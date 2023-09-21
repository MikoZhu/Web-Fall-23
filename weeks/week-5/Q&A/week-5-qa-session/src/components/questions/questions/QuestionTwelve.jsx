export const QuestionTwelve = ({ title, number }) => {
  const content = {
    context:
      "Its just a simple reference on how the site will look like but its viewable through the vsCode engine or through the browser in the repo instructions :) - you don't really use it in your project",
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
