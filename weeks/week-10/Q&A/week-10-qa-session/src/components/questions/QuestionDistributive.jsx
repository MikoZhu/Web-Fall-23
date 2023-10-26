import { useState } from "react";
import { QuestionZero } from "./questions/QuestionZero";
import { QuestionOne } from "./questions/QuestionOne";
import { QuestionTwo } from "./questions/QuestionTwo";
import { QuestionThree } from "./questions/QuestionThree";
import { QuestionFour } from "./questions/QuestionFour";
import { QuestionFive } from "./questions/QuestionFive";
import { QuestionSix } from "./questions/QuestionSix";
import { QuestionSeven } from "./questions/QuestionSeven";
import { QuestionEight } from "./questions/QuestionEight";
import { QuestionNine } from "./questions/QuestionNine";
import { QuestionTen } from "./questions/QuestionTen";

export const QuestionDistributive = () => {
  const questions = [
    {
      id: 0,
      title:
        "Can you explain more about nex week’s project and the collaboration between the UX class and our class ? ",
      context:
        "This question relates to the next week's collaboration project between the UX & Web Dev Class of the Technigo Fall 2023 Bootcamps",
    },
    {
      id: 1,
      title:
        "Is it okay to substitute Link with useNavigate or is there a reason why we shouldn't?",
      context:
        "This question relates to the choice between using Link and useNavigate() for navigation in a React application and whether it's okay to substitute one for the other.",
    },
    {
      id: 2,
      title:
        "Could you explain what the middleware and immer are? Also, I am confused about when I should use useShallow, get, and subscribe.",
      context:
        "This question explores the strategic placement of validation checks within a React component, specifically distinguishing between real-time feedback using the useEffect hook and submission-time validation in the handleFormSubmit function, to optimize user experience and resource utilization.",
    },

    {
      id: 3,
      title:
        "What is getState and what is it used for? -- We did not come across any getState() method from Zustand in the course material or Tuesday's code session.  What is it, how to use it and where and when to use it? Would appreciate a tutorial.",
      context:
        "This question relates to the 'getState' method in Zustand in React.",
    },
  ];

  return (
    <>
      <QuestionZero title={questions[0].title} number={questions[0].id} />

      <QuestionOne title={questions[1].title} number={questions[1].id} />
      <QuestionTwo title={questions[2].title} number={questions[2].id} />
      <QuestionThree title={questions[3].title} number={questions[3].id} />
      {/* <QuestionFour title={questions[4].title} number={questions[4].id} />
      <QuestionFive title={questions[5].title} number={questions[5].id} /> */}
    </>
  );
};
