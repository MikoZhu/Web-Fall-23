//import jsonData from "./data.json"; // Example of importing a json object into the file, but it does not exist
import { Test, TestTwo, TestThree } from "./Test";
export const QuestionEight = ({ title, number }) => {
  const content = {
    context:
      "In React, whether you use curly braces {} during import depends on how you exported the code, not on the file type.",
    bulletpoints: [
      {
        id: 1,
        title:
          "If you see this component structure you'll see that the syntax of the component itself is written with the export keyword first, this is why we import components in a destructured manner.",
        point: "In technical terms, it saves a bit of processing power",
      },
      {
        id: 2,
        title: "In more advanced terms",
        point:
          "You can have a file with multiple components but, this goes agaisnt the principle of react but hey, who am i to judge. I like pineapple pizza.",
      },
    ],
  };
  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
        </summary>
        <>
          <p>{content.context}</p>
          {content.bulletpoints.map((bulletPoint) => (
            <ul key={bulletPoint.id}>
              <>
                <h4>{bulletPoint.title}</h4>
                <li>{bulletPoint.point}</li>
              </>
            </ul>
          ))}
        </>
        <Test />
        <TestTwo />
        <TestThree />
      </details>
    </div>
  );
};
