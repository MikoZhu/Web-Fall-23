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
        "On Tuesday Diego said that we have to translate the text ourselves into another language.In this project it is easy because there is little text, but what if I have a lot of text and we have as many as 5 languages? What should we do in that case?",
      context:
        "This question is about handling text translation in projects with a substantial amount of content and multiple languages, seeking guidance on best practices.",
    },
    {
      id: 1,
      title:
        "I have a question about the :root{} term in css. What names should we give, for example, when we have 4 colors to use? What is the best way to name them? E.g. --firstly-color, --secondly-color or rather --white-color or maybe --description-color? My question is not only about the color but also about the fonts, for example, because sometimes we have several fonts in a project. What is the best way to name them?",
      context:
        "This question relates to CSS custom properties, also known as CSS variables, and the best practices for naming them when dealing with colors, fonts, and other styling elements in a project.",
    },
    {
      id: 2,
      title:
        "When we use styled-components. We have only one file js for this style or every our jsx has its own js with style?",
      context:
        "This question pertains to the usage of styled-components in React and whether it's best to have a single file for styling or separate styles for each JSX component.",
    },
    {
      id: 3,
      title: "What is windows Object? When we use and Why?",
      context:
        "This question inquires about the 'windows Object' in JavaScript, its purpose, and when and why it should be used.",
    },
    {
      id: 4,
      title:
        "How can I utilize SVG files in Vite while enabling the modification of the fill color upon hovering? I attempted using the 'img' tag, but it appears that 'img' can only be used for static images. Could you please provide guidance on how to apply hover styles to SVGs for use in conjunction with Tailwind CSS?",
      context:
        "This question seeks guidance on how to work with SVG files in Vite and apply hover styles to them, particularly when using Tailwind CSS for styling.",
    },
    {
      id: 5,
      title:
        "Can I create a component for the nav bar with links (<Navigation />) and then import it to the app or I should have the tag <nav> inside the app?",
      context:
        "This question is about structuring the navigation bar in a React application, considering whether to create a separate component or include the navigation within the main app component.",
    },
    {
      id: 6,
      title:
        "How do we style specific parts of text that are in the i18n translation file? Can they be inside a const or do they have to be inside a JSON?",
      context:
        "This question addresses styling text that comes from internationalization (i18n) translation files and whether it can be placed within a const or should be kept in a JSON file.",
    },
    {
      id: 7,
      title:
        "In my design, I have 'cards' with different courses that I have created by making a JSON file and then map each card. I don't understand how to translate it though since the text of the cards is not in the en.json/se.json. How do I use the useTranslation {t('something')} in my code to translate something that is mapped out? For example, the <p>{course.courseBrief}</p> in my CourseCard.jsx fetches from the courses.json, how do I get the {t('something')} in there?",
      context:
        "This question addresses the challenge of translating dynamically generated content, such as course cards, that are not directly present in translation files and seeks guidance on using translation functions like 'useTranslation' in such scenarios.",
    },
    {
      id: 8,
      title:
        "Styled components: So if I create a new component for my styled component that I import into my component I want to style (to keep the component as clean as possible), what are the advantages of styled components instead of the classic way of importing a CSS file?",
      context:
        "This question explores the advantages of using styled-components in comparison to traditional CSS file imports when creating and styling React components.",
    },
  ];

  // You can now use the customQuestions array as needed in your code.

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
      {/* <QuestionNine title={questions[9].title} number={questions[9].id} /> */}
    </>
  );
};
