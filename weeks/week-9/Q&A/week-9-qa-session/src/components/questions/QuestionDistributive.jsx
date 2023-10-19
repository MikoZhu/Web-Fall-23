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
        "Can you show us how to do a loading component where it shows a message and also with the ifs and try? Like how would it look like? And should the loading have its own component? Should I then import it to the app.jsx?",
      context:
        "This question relates to the best practices of creating and structuring a loading component in React applications.",
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
    </>
  );
};
