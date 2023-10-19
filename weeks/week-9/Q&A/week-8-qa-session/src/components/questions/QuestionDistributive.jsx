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
        "can you explain more about how to Netlify the project? I feel we all have different problems when Netlify the project. 1. when we create a sub-folder, such as the week 8 project. Is there another way to Netilify the project instead of moving all files to the upper folder? 2. When I create a file .env, Netlify cannot recognize the .env(my API key or authentication). Should we set it directly in the Netlify?3. Netilify has its own configuration, how can we deploy it by this? Sometimes, we cannot Netlify the project, it needs a toml file.",
      context:
        "This question relates to the challenges and best practices in deploying React projects on Netlify, specifically concerning project structure, environment variables, and configuration.",
    },
    {
      id: 1,
      title:
        "Since we are not suppose to think 'parent' + 'child' now, can you please explain how we should think about the structure?",
      context:
        "This question relates to the evolving mindset in React component structure, moving from a strict parent-child relationship to a more modular and atomic design approach, with considerations for state management and props.",
    },
    {
      id: 2,
      title:
        "When we have deployed our movie site the title and releasedate goes outside the movie picture when it's hovered. In our localhost it's not like that. How can we prevent the code not to change from the localhost to the deployed site?",
      context:
        "This question explores the strategic placement of validation checks within a React component, specifically distinguishing between real-time feedback using the useEffect hook and submission-time validation in the handleFormSubmit function, to optimize user experience and resource utilization.",
    },

    {
      id: 3,
      title:
        "On the deployed site we get a Page Not Found when we open the link. If we press 'Back to our site' it works. And also when we go in to a movie and the refresh the page we also get Page not found. What is the reason for this? we saw that when refreshing Technigos movie page is also like that.",
      context:
        "This question relates to the common issue of 'Page Not Found' errors on single-page applications (SPAs) when deployed and refreshed.",
    },
    {
      id: 4,
      title: "What the hell is an .env file?",
      context:
        "This question relates to the concept of environment variables and their storage in modern web development projects.",
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
      context:
        "This question relates to understanding the syntax for a POST fetch request in React, handling different data types with JSON.stringify, and the usage of 'async' and 'await' in JavaScript.",
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
      {/* <QuestionFive title={questions[5].title} number={questions[5].id} />
      <QuestionSix title={questions[6].title} number={questions[6].id} />
      <QuestionSeven title={questions[7].title} number={questions[7].id} />
      <QuestionEight title={questions[8].title} number={questions[8].id} />
      <QuestionNine title={questions[9].title} number={questions[9].id} />
      <QuestionTen title={questions[10].title} number={questions[10].id} /> */}
    </>
  );
};
