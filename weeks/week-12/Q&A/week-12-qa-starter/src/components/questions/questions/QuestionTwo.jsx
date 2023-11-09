import { useState, useRef } from "react";
import QRCode from "qrcode";

export const QuestionTwo = ({ title, number }) => {
  const content = {
    context: "Let's build something cool",
  };

  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
        </summary>
        <>
          <p>{content.context}</p>
          <img
            src="https://media.giphy.com/media/lgRNj0m1oORfW/giphy.gif"
            alt="Grenlights"
          />
        </>
      </details>
    </div>
  );
};
