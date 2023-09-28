import { useState } from "react";
import { QuestionZero } from "./questions/QuestionZero";
import { QuestionOne } from "./questions/QuestionOne";
import { QuestionTwo } from "./questions/QuestionTwo";
import { QuestionThree } from "./questions/QuestionThree";
import { QuestionFour } from "./questions/QuestionFour";
import { QuestionFive } from "./questions/QuestionFive";
import { QuestionSix } from "./questions/QuestionSix";

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
        "I'm getting this error message: console.js:213 Warning: The `value` prop supplied to <select> must be a scalar value if `multiple` is false. I think that the warning message appears  because I'm  trying to set the value prop of a <select> element to an array (answer) in the Question component. Is that allowed when the multiple attribute is not set to true?",
      context:
        "The question is about a warning received in React when trying to set the value prop of a <select> element using an array, without the multiple attribute being set to true.",
    },

    {
      id: 3,
      title:
        "Hi! From your example on Tuesday: You gave a great explanation on how the updateFormData function works. Can you please also explain more in detail what happens after the updateFormData function has taken its new field and value? It the function then passed in as a prop in the different question components? In for example Name.jsx the userName function is invoked and updated with the new user data. Is that data passed back to the parent component again? And also the value (the user name) is passed up to the parent component through a prop?. I find it really hard to understand the data flow through the components. Would it be possible to get some kind of visual example of how data is passed through the props here?",
      context:
        "Question inquiring about the flow of data between parent and child components in React, specifically how the updateFormData function updates state in the parent and how this state is passed down and back up between components.",
    },
    {
      id: 4,
      title:
        "Project: We would like to have a question with some checkboxes, one of which will be 'Other' with an input field, type 'text', so that the user can type in their answer. How can we create that and handle the value from this input?",
      context:
        "The question is asking how to create a question component in React that offers multiple checkbox options, including an 'Other' option with a text input for custom answers.",
    },
    {
      id: 5,
      title:
        "useState - Should we use it in all components or only in app.jsx ? Or this is depend? - Counter - +1 - SAME REACTIVE VARIABLE AS QUESTION BELOW :)",
      context:
        "The student is inquiring about the best practices for placing state in React components, specifically if useState should be used in all components or just in the top-level component like App.jsx.",
    },
    {
      id: 6,
      title:
        "useState - Should we use it in all components or only in app.jsx ? Or this is depend? - Counter - +2 - SAME REACTIVE VARIABLE AS QUESTION ABOVE :)",
      context:
        "The student is inquiring about the best practices for placing state in React components, specifically if useState should be used in all components or just in the top-level component like App.jsx.",
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

  // Question 2 - useState & Logic
  const sampleQuestion = {
    text: "What's your favorite color?",
    type: "dropdown",
    options: ["Red", "Blue", "Green"],
  };

  const handleAnswerSubmit = (answer) => {
    alert(`You answered: ${answer}`);
  };

  // QUestion 5&6 Top level state data example
  // Counter
  const [count, setCount] = useState(0);

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
      <QuestionTwo
        title={questions[2].title}
        number={questions[2].id}
        question={sampleQuestion}
        onAnswerSubmit={handleAnswerSubmit}
      />
      <QuestionThree title={questions[3].title} number={questions[3].id} />
      <QuestionFour title={questions[4].title} number={questions[4].id} />
      <QuestionFive
        title={questions[5].title}
        number={questions[5].id}
        count={count}
        setCount={setCount}
      />
      <QuestionSix
        title={questions[6].title}
        number={questions[6].id}
        count={count}
        setCount={setCount}
      />
    </>
  );
};
