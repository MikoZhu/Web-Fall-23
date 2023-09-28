export const QuestionSix = ({ title, number }) => {
  const content = {
    context:
      "In React, you typically don't need to manually add 'use strict' because the build tools like Create React App or Vite automatically include it in the transpiled code to enforce stricter parsing and error handling on your JavaScript code. Remember that we are using vite because is a modern and faster approach ;)",
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
