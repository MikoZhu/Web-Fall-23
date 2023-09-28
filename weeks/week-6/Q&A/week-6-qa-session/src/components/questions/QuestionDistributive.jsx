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
import { QuestionEleven } from "./questions/QuestionEleven";
import { QuestionTwelve } from "./questions/QuestionTwelve";
import { QuestionThirtheen } from "./questions/QuestionThirtheen";
import { QuestionFourteen } from "./questions/QuestionFourteen";
import { QuestionFifteen } from "./questions/QuestionFifteen";
import { QuestionSixteen } from "./questions/QuestionSixteen";

export const QuestionDistributive = () => {
  const questions = [
    {
      id: 0,
      title:
        "how to pass a child component's data up to a parent component. Can you explain it in more detail? (I've asked ChatGPT, but I still cannot fully comprehend it.)",
      context:
        "In React, while data typically flows from parent to child components through props, how can a child component communicate or send data back to its parent component?",
    },
    {
      id: 1,
      title:
        "Regarding this week's project, there is an advanced goal related to Regex validation. Could you please provide a more detailed example or explain it further? I'm finding it a bit challenging to grasp.",
      context:
        "In the context of our Typeform-like project, Regex validation ensures that the data users provide in the survey, like email addresses, matches a specific format, enhancing the accuracy and reliability of the collected data.",
    },
    {
      id: 2,
      title:
        "When we start write in react we always run 'npm install' and 'npm run dev'?",
      context:
        "The question is about understanding the purpose of running npm install and npm run dev when starting to work with React.",
    },

    {
      id: 3,
      title:
        "Can you say more about App Component, parent Component and child Component?. I now only that main we don't touch, but when I know whit is one ( I talk about parent and child )",
      context:
        "Understanding the concept of App Component, parent Component, and child Component in React.",
    },
    {
      id: 4,
      title:
        "Everytime we run npm create vite@latest my-react-project --template ? And why we need this ?",
      context:
        "The question is about understanding the purpose and necessity of using the npm init vite@latest my-react-project --template react command in the context of setting up a new React project with Vite.",
    },
    {
      id: 5,
      title:
        "Can you show syntax of code react ? I mean how should look main file ,app file ,parent file and child file",
      context: "Clarify React syntax structure",
    },
    {
      id: 6,
      title: 'In JS we use "use strict" what about react?',
      context: 'Query about the equivalent of "use strict" in React.',
    },
    {
      id: 7,
      title:
        "When i run vite I have project 'my-react-project' - but I don't get it what is that ? Becouse I have my own projet like the music so waht is this 'my-react-project' ? When I use this",
      context:
        'Clarification about the project name "my-react-project" when using Vite.',
    },
    {
      id: 8,
      title:
        "In react context, I understood correct i I have file json I wirte inport name without {} but i have file jsx I wirte imort {name} ?",
      context:
        "The question is about understanding the difference in import syntax, with or without curly braces, in React, and whether it is related to the file being JSON or JSX.",
    },
    {
      id: 9,
      title: `"I wonder if I could get a quick explanation of the following error message: -- Error: Objects are not valid as a React child (found: object with keys {height, url, width}). If you meant to render a collection of children, use an array instead. -- I managed to solve the error but not really sure how I did it. Thanks!"`,
      context:
        "Understanding the difference in import syntax between JSON and JSX files.",
    },
    {
      id: 10,
      title:
        "what does it do? <> in the App.js line 45  (repo fall 2023 week=%) - I send screenshot",
      context: "Query about the use of <> in a specific line of App.js",
    },
    {
      id: 11,
      title:
        "In week05 in pokemon exercise with Diego we have app.jsx and another file - why we implement data.json on the app.jsx not for example to pokemon.jsx even if you use also in pokemno.jsx this data ?",
      context:
        "Tricky question cause its mean to teach you about how to structure passing data through props",
    },
    {
      id: 12,
      title:
        "What do i do with the music-releases.svg file in the file directory of the repo? How do I convert that code into icons?",
      context: "talk about it",
    },
    {
      id: 13,
      title:
        "Could you please explain ones more for react when to put variables in  {} and when not and instead in () ? Thank you! 🙂",
      context:
        "The question is seeking clarification on when to use curly braces {} and when to use parentheses () in React, specifically within the context of handling variables and grouping elements in JSX.",
    },
    {
      id: 14,
      title:
        "One recommendation was to install the react developer tools as an addon to our browser. Could you show us, what it can do for us? Thank you!",
      context: "How to install dev tools - chrome",
    },
    {
      id: 15,
      title: `I'm getting an error message in vscode that something is missing in the props validation. After following the link given in the error message I end up here: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
      but I'm not sure which one I should use and what this is about.`,
      context: "Let's disable eslint rules",
    },
    {
      id: 16,
      title:
        "Are we supposed to have one css file to each component instead of one big css file connected to app.jsx?",
      context:
        "The question is about the best practices in managing CSS in React, specifically whether to use individual CSS files for each component or a single, centralized CSS file connected to app.jsx.",
    },
  ];

  // Question 0 useState
  // Using Click
  const [childData, setChildData] = useState("");

  const handleChildData = (data) => {
    setChildData(data);
    alert(data);
  };

  // Using an input
  const [childInputData, setChildInputData] = useState("");

  const handleChildInput = (data) => {
    setChildInputData(data);
    alert(`Received from child: ${data}`);
  };
  return (
    <>
      <h4>Data from Question Zero Input: {childInputData}</h4>
      <QuestionZero
        title={questions[0].title}
        number={questions[0].id}
        sendDataToParent={handleChildData}
        sendInputToParent={handleChildInput}
      />

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
      <QuestionEleven title={questions[11].title} number={questions[11].id} />
      <QuestionTwelve title={questions[12].title} number={questions[12].id} />
      <QuestionThirtheen
        title={questions[13].title}
        number={questions[13].id}
      />
      <QuestionFourteen title={questions[14].title} number={questions[14].id} />
      <QuestionFifteen title={questions[15].title} number={questions[15].id} />
      <QuestionSixteen title={questions[16].title} number={questions[16].id} />
    </>
  );
};
