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
        "Can you explain one more time about Vite? How does it work? When we clone the repo from technigo for example happy thought we have already vite.config.js so we don't need run vite right? Only when we start own new project?",
      context:
        "This question relates to the understanding and utilization of Vite in React development, particularly when working with an existing, pre-configured project repository like 'Happy Thoughts'",
    },
    {
      id: 1,
      title: "Can you go through the POST method?",
      context:
        "This question relates to the implementation and understanding of the POST method within a React component, focusing on how to send data from the client to the server.",
    },
    {
      id: 2,
      title:
        "In the PostMessage.jsx file provided, we're checking if the message is too long in the useEffect hook but checking if the message is too short inside of the handleFormSubmit function. How come we're doing these checks in different parts of the code?",
      context:
        "This question explores the strategic placement of validation checks within a React component, specifically distinguishing between real-time feedback using the useEffect hook and submission-time validation in the handleFormSubmit function, to optimize user experience and resource utilization.",
    },

    {
      id: 3,
      title:
        "I have a question about the branches we create when working in teams. After we have created the pull request, should I do something with the branches since they won't be used anymore after merging everything?",
      context:
        "This question relates to the best practices for managing Git branches in a team setting, specifically focusing on the steps to take with branches after creating a pull request and merging changes",
    },
    {
      id: 4,
      title: "Can you explain a bit more about Postman and how to use it?",
      context:
        "This question relates to understanding Postman as a tool for API development and testing, focusing on its utility and basic usage in the context of web development.",
    },
    {
      id: 5,
      title:
        "what is good way to deal with 400 error? it sometimes happened when I refresh the page. when I check console it points fetching line so I assume something happened in the server side?",
      context:
        "This question relates to managing and mitigating HTTP 400 errors in React, particularly understanding their origins and implementing user-friendly error handling.",
    },
    {
      id: 6,
      title:
        "Could we have a quick run through of the syntax for a fetch request using POST. Does it change for different data types? (refering to the line  JSON.stringify, can I use this for numbers? or does everything convert into a JSON string? ). Going back to Week 4 content was helpful, but, I'm having trouble coding the correct syntax to update the hearts in this project. Using 'await' and 'async'  has also confused me as I never used it in the Weather App. Why do we now use it here? Thank you!!!!",
      context: "",
    },
    {
      id: 7,
      title:
        "I am confused as to whether I should use the state or the const/let in React. Could you explain?",
      context:
        "This question relates to the fundamental understanding of state management and variable declaration in React, focusing on when and why to use state or const/let for variable assignment.",
    },
    {
      id: 8,
      title:
        "Is it to prefer to let the postLike and submit form react on the change in user state (for example when useState “loading” changes, like you showed in one of the cheat sheet answers) or is it just as good to let them act as “normal” functions that are invoked by the button?. I mean, is it good practice to use useEffect as much as possible?",
      context:
        "This question relates to the strategic use of React’s useState and useEffect hooks to manage component state and side effects, especially in scenarios involving data fetching and responding to user actions, such as button clicks.",
    },
    {
      id: 9,
      title:
        "how can we do optimistic update? I tried and it is giving me error related to date. it says there is problem with 'createdAt'",
      context:
        "This question relates to implementing optimistic updates in a React application and troubleshooting an error related to a 'createdAt' date attribute.",
    },
    {
      id: 10,
      title: "how we use postman? can we just use inspect tool instead of it?",
      context:
        "This question relates to the utilization of Postman for API testing and its comparison with browser inspect tool functionalities.",
    },
  ];

  return (
    <>
      <QuestionZero title={questions[0].title} number={questions[0].id} />

      <QuestionOne title={questions[1].title} number={questions[1].id} />
      <QuestionTwo title={questions[2].title} number={questions[2].id} />
      <QuestionThree title={questions[3].title} number={questions[3].id} />
      <QuestionFour title={questions[4].title} number={questions[4].id} />
      <QuestionFive title={questions[5].title} number={questions[5].id} />
      <QuestionSix title={questions[6].title} number={questions[6].id} />
      <QuestionSeven title={questions[7].title} number={questions[7].id} />
      <QuestionEight title={questions[8].title} number={questions[8].id} />
      <QuestionNine title={questions[9].title} number={questions[9].id} />
      <QuestionTen title={questions[10].title} number={questions[10].id} />
    </>
  );
};
