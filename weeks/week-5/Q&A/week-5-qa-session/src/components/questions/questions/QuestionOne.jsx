export const QuestionOne = ({ title, number }) => {
  const content = {
    context:
      "In JSX, adding spaces inside self-closing tags < /> and curly brackets { name } is mainly for clean, readable code and doesn't affect how things work. It's really about what you or your team prefer. Plus, using spaces like this helps avoid adding extra divs we don't need.",
  };
  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
        </summary>
        <>
          <p>{content.context}</p>
          {/* This does not create extra wrapping elements that are not needed */}
          <>
            <p>inspect element on browser</p>
          </>
          {/* This creates an extra empty div that is harder to read on the long run */}
          <div>
            <p>inspect element on browser</p>
          </div>
        </>
      </details>
    </div>
  );
};
